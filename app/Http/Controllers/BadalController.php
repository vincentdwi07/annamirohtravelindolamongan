<?php

namespace App\Http\Controllers;

use App\Models\Badal;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class BadalController extends Controller
{
    // Untuk user
    public function index(Request $request)
    {
        $kategori = $request->query('kategori');
        $badal = Badal::where('kategori', $kategori)->first();

        return Inertia::render('UserBadal', [
            'badal' => $badal,
            'kategori' => $kategori
        ]);
    }

    // Untuk admin - menampilkan semua data
    public function indexAdmin()
    {
        $badal = Badal::all();
        
        return Inertia::render('AdminBadal', [
            'badal' => $badal
        ]);
    }

    // Untuk admin - detail badal
    public function show($id)
    {
        $badal = Badal::findOrFail($id);
        
        return Inertia::render('AdminBadalDetail', [
            'badal' => $badal
        ]);
    }

    // Untuk admin - create badal
    public function create()
    {
        return Inertia::render('AdminAddBadal');
    }

    // Untuk admin - store badal baru
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'kategori' => 'required|string|in:Haji,Umroh',
            'harga' => 'required|string',
            'konten' => 'required|string',
            'img_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        try {
            $badal = new Badal();
            $badal->title = $request->title;
            $badal->kategori = $request->kategori;
            $badal->harga = $request->harga;
            $badal->konten = $request->konten;

            if ($request->hasFile('img_url')) {
                $imagePath = $request->file('img_url')->store('badal', 'public');
                $badal->img_url = Storage::url($imagePath);
            }

            $badal->save();

            return redirect()
                ->route('admin.badal')
                ->with('success', 'Paket Badal berhasil ditambahkan');

        } catch (\Exception $e) {
            Log::error('Error creating Badal package: ' . $e->getMessage());
            
            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Terjadi kesalahan saat menambah paket Badal');
        }
    }

    // Untuk admin - update badal
    public function update(Request $request, $id)
    {
        try {
            Log::info('Update request received:', $request->all());
            
            $badal = Badal::findOrFail($id);

            // Validasi hanya untuk field yang ada di request
            $rules = [];
            if ($request->has('title')) {
                $rules['title'] = 'string|max:255';
            }
            if ($request->has('kategori')) {
                $rules['kategori'] = 'string|in:Haji,Umroh';
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

            // Update data yang ada di request
            foreach ($validated as $key => $value) {
                if ($key !== 'img_url') {
                    $badal->$key = $value;
                }
            }

            // Handle file upload jika ada
            if ($request->hasFile('img_url')) {
                if ($badal->img_url && Storage::disk('public')->exists(str_replace('/storage/', '', $badal->img_url))) {
                    Storage::disk('public')->delete(str_replace('/storage/', '', $badal->img_url));
                }
                $imagePath = $request->file('img_url')->store('badal', 'public');
                $badal->img_url = Storage::url($imagePath);
            }

            $badal->save();

            Log::info('Badal updated successfully:', $badal->toArray());

            return redirect()
                ->back()
                ->with('success', 'Paket Badal berhasil diperbarui');

        } catch (\Exception $e) {
            Log::error('Error updating Badal package: ' . $e->getMessage());
            Log::error('Stack trace: ' . $e->getTraceAsString());
            
            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Terjadi kesalahan saat memperbarui paket Badal');
        }
    }

    // Untuk admin - delete badal
    public function destroy($id)
    {
        try {
            $badal = Badal::findOrFail($id);

            // Hapus file gambar jika ada
            if ($badal->img_url) {
                $imagePath = str_replace('/storage/', '', $badal->img_url);
                if (Storage::disk('public')->exists($imagePath)) {
                    Storage::disk('public')->delete($imagePath);
                }
            }

            // Hapus record dari database
            $badal->delete();

            return redirect()
                ->back()
                ->with('success', 'Paket Badal berhasil dihapus');

        } catch (\Exception $e) {
            Log::error('Error deleting Badal package: ' . $e->getMessage());
            
            return redirect()
                ->back()
                ->with('error', 'Terjadi kesalahan saat menghapus paket Badal');
        }
    }
}