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
        // Validasi input
        $request->validate([
            'img_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string|max:255',
            'kategori' => 'required|string|in:Plus,Furodha,Percepatan',
            'harga' => 'required|string',
            'periode' => 'required|string',
            'seat' => 'required|integer|min:0',
            'hotel_mekkah' => 'nullable|string',
            'hotel_madinah' => 'nullable|string',
            'maskapai' => 'nullable|string',
            'itenerary' => 'nullable|string',
            'catatan' => 'nullable|string',
        ]);

        // Upload gambar
        $imagePath = $request->file('img_url')->store('haji', 'public');
        $imageUrl = Storage::url($imagePath);

        // Simpan data ke DB
        $haji = new Haji();
        $haji->img_url = $imageUrl;
        $haji->title = $request->title;
        $haji->kategori = $request->kategori;
        $haji->harga = $request->harga;
        $haji->periode = $request->periode;
        $haji->seat = $request->seat;
        $haji->hotel_mekkah = $request->hotel_mekkah;
        $haji->hotel_madinah = $request->hotel_madinah;
        $haji->maskapai = $request->maskapai;
        $haji->itenerary = $request->itenerary;
        $haji->catatan = $request->catatan;
        $haji->save();

        return redirect()->route('admin.haji')->with('message', 'Paket Haji berhasil ditambahkan');
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

        // Rules validasi untuk atribut yang mungkin dikirim
        $rules = [];
        if ($request->has('title')) {
            $rules['title'] = 'string|max:255';
        }
        if ($request->has('kategori')) {
            $rules['kategori'] = 'string|max:100';
        }
        if ($request->has('harga')) {
            $rules['harga'] = 'string|max:50';
        }
        if ($request->has('periode')) {
            $rules['periode'] = 'string|max:100';
        }
        if ($request->has('hotel_mekkah')) {
            $rules['hotel_mekkah'] = 'string|max:255';
        }
        if ($request->has('hotel_madinah')) {
            $rules['hotel_madinah'] = 'string|max:255';
        }
        if ($request->has('maskapai')) {
            $rules['maskapai'] = 'string|max:255';
        }
        if ($request->has('seat')) {
            $rules['seat'] = 'integer|min:0';
        }
        if ($request->has('itenerary')) {
            $rules['itenerary'] = 'string';
        }
        if ($request->has('catatan')) {
            $rules['catatan'] = 'string';
        }
        if ($request->hasFile('img_url')) {
            $rules['img_url'] = 'image|mimes:jpeg,png,jpg,gif|max:2048';
        }

        $validated = $request->validate($rules);

        // Proses upload gambar jika ada
        if ($request->hasFile('img_url')) {
            // Hapus file lama jika ada
            if ($haji->img_url && Storage::disk('public')->exists(str_replace('/storage/', '', $haji->img_url))) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $haji->img_url));
            }
            $imagePath = $request->file('img_url')->store('haji', 'public');
            $validated['img_url'] = Storage::url($imagePath);
        }

        // Update data dengan nilai yang sudah divalidasi
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
