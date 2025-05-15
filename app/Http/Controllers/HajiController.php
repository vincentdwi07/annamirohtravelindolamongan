<?php

namespace App\Http\Controllers;

use App\Models\Haji;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class HajiController extends Controller
{
    public function index(Request $request)
    {
        $kategori = $request->query('kategori');
    
        // Coba ambil datanya dulu tanpa fail
        $haji = Haji::where('kategori', $kategori)->first();
    
        // Render tetap jalan, walau datanya null
        return Inertia::render('UserHaji', [
            'haji' => $haji,
            'kategori' => $kategori
        ]);
    }
    
    
    // POST: /haji (Create)
    public function indexAdmin()
    {
        $haji = Haji::all();
        return Inertia::render('AdminHaji', [
            'haji' => $haji
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminAddHaji');
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'title' => 'required|string|max:255',
                'kategori' => 'required|string',
                'harga' => 'required|string',
                'konten' => 'nullable|string',
                'img_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            ]);

            if ($request->hasFile('img_url')) {
                $imagePath = $request->file('img_url')->store('haji', 'public');
                $validated['img_url'] = Storage::url($imagePath);
            }

            Haji::create($validated);

            return redirect()
                ->route('admin.haji')
                ->with('success', 'Paket Haji berhasil ditambahkan');

        } catch (\Exception $e) {
            Log::error('Error creating Haji package: ' . $e->getMessage());
            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Terjadi kesalahan saat menambahkan paket Haji');
        }
    }

    public function show($id)
    {
        $haji = Haji::findOrFail($id);
        return Inertia::render('AdminHajiDetail', [
            'haji' => $haji
        ]);
    }

    public function update(Request $request, $id)
    {
        try {
            Log::info('Update request received:', $request->all());
            
            $haji = Haji::findOrFail($id);

            // Buat rules hanya untuk field yang ada di request
            $rules = [];
            if ($request->has('title')) {
                $rules['title'] = 'string|max:255';
            }
            if ($request->has('kategori')) {
                $rules['kategori'] = 'string';
            }
            if ($request->has('harga')) {
                $rules['harga'] = 'string';
            }
            if ($request->has('konten')) {
                $rules['konten'] = 'string';
            }
            if ($request->hasFile('img_url')) {
                $rules['img_url'] = 'image|mimes:jpeg,png,jpg,gif|max:2048';
            }

            $validated = $request->validate($rules);

            if ($request->hasFile('img_url')) {
                if ($haji->img_url && Storage::disk('public')->exists(str_replace('/storage/', '', $haji->img_url))) {
                    Storage::disk('public')->delete(str_replace('/storage/', '', $haji->img_url));
                }
                $imagePath = $request->file('img_url')->store('haji', 'public');
                $validated['img_url'] = Storage::url($imagePath);
            }

            $haji->update($validated);

            Log::info('Haji updated successfully:', $validated);

            return redirect()
                ->back()
                ->with('success', 'Paket Haji berhasil diperbarui');

        } catch (\Exception $e) {
            Log::error('Error updating Haji package: ' . $e->getMessage());
            Log::error('Stack trace: ' . $e->getTraceAsString());
            
            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Terjadi kesalahan saat memperbarui paket Haji');
        }
    }

    public function destroy($id)
    {
        try {
            $haji = Haji::findOrFail($id);

            if ($haji->img_url && Storage::disk('public')->exists(str_replace('/storage/', '', $haji->img_url))) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $haji->img_url));
            }

            $haji->delete();

            return redirect()
                ->route('admin.haji')
                ->with('success', 'Paket Haji berhasil dihapus');

        } catch (\Exception $e) {
            Log::error('Error deleting Haji package: ' . $e->getMessage());
            return redirect()
                ->back()
                ->with('error', 'Terjadi kesalahan saat menghapus paket Haji');
        }
    }
}
