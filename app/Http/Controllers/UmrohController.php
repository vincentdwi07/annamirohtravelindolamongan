<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Umroh;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Log;

class UmrohController extends Controller
{
    public function index(Request $request)
    {
        $kategori = $request->query('kategori');

        if ($kategori){
            $umroh = Umroh::where('kategori', $kategori)->get();
        }else{
            $umroh = Umroh::all();
        }

        $umrohPusat = Umroh::whereRaw('LOWER(TRIM(kategori)) = ?', ['pusat'])->get();

        return inertia('UserUmroh', [
            'umroh' => $umroh,
            'kategori' => $kategori,
            'umrohPusat' => $umrohPusat,
        ]);
    }


    public function indexAdmin(Request $request)
    {
        $umroh = Umroh::all();

        return inertia('AdminUmroh', [
            'umroh' => $umroh,
        ]);
    }
    
    public function indexAddAdmin(Request $request)
    {
        return inertia('AdminAddUmroh');
    }

    public function showAdmin($id)
    {
        $umroh = Umroh::findOrFail($id);

        return inertia('AdminUmrohDetail', [
            'umroh' => $umroh
        ]);
    }

    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'img_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string|max:255',
            'price' => 'required|string',
            'kategori' => 'required|string|in:Promo,Reguler,Ekonomis,Plus,Premium,Eksklusif,Tour,Pusat',
            'periode' => 'required|string',
            'seat' => 'required|integer|min:0',
        ]);

        // Upload dan simpan gambar ke direktori public agar bisa diakses melalui symlink
        $imagePath = $request->file('img_url')->store('umroh', 'public');
        
        // URL gambar yang benar menggunakan Storage::url agar menggunakan symlink
        $imageUrl = Storage::url($imagePath);

        // Buat paket umroh baru
        $umroh = new Umroh();
        $umroh->img_url = $imageUrl; // URL dengan symlink yang benar
        $umroh->title = $request->title;
        $umroh->price = $request->price;
        $umroh->kategori = $request->kategori; // Menyimpan nilai kategori
        $umroh->periode = $request->periode;
        $umroh->hotel_mekkah = $request->hotel_mekkah;
        $umroh->hotel_madinah = $request->hotel_madinah;
        $umroh->maskapai = $request->maskapai;
        $umroh->seat = $request->seat;
        $umroh->itenerary = $request->itenerary;
        $umroh->catatan = $request->catatan;
        $umroh->save();

        return redirect()->route('admin.umroh')->with('message', 'Paket Umroh berhasil ditambahkan');
    }

    public function update(Request $request, $id)
    {
        try {
            Log::info('Update request received:', $request->all());
            
            $umroh = Umroh::findOrFail($id);

            // Buat rules hanya untuk field yang ada di request
            $rules = [];
            if ($request->has('title')) {
                $rules['title'] = 'string|max:255';
            }
            if ($request->has('price')) {
                $rules['price'] = 'string';
            }
            if ($request->has('kategori')) {
                $rules['kategori'] = 'string|in:Promo,Reguler,Ekonomis,Plus,Premium,Eksklusif,Umroh + Tour';
            }
            if ($request->has('periode')) {
                $rules['periode'] = 'string';
            }
            if ($request->has('hotel_mekkah')) {
                $rules['hotel_mekkah'] = 'nullable|string';
            }
            if ($request->has('hotel_madinah')) {
                $rules['hotel_madinah'] = 'nullable|string';
            }
            if ($request->has('maskapai')) {
                $rules['maskapai'] = 'nullable|string';
            }
            if ($request->has('seat')) {
                $rules['seat'] = 'integer|min:0';
            }
            if ($request->has('itenerary')) {
                $rules['itenerary'] = 'nullable|string';
            }
            if ($request->has('catatan')) {
                $rules['catatan'] = 'nullable|string';
            }
            if ($request->hasFile('img_url')) {
                $rules['img_url'] = 'image|mimes:jpeg,png,jpg,gif|max:2048';
            }

            // Validasi data yang ada
            $validated = $request->validate($rules);

            // Handle file upload jika ada
            if ($request->hasFile('img_url')) {
                if ($umroh->img_url) {
                    $oldPath = str_replace('/storage/', '', $umroh->img_url);
                    if (Storage::disk('public')->exists($oldPath)) {
                        Storage::disk('public')->delete($oldPath);
                    }
                }
                $imagePath = $request->file('img_url')->store('umroh', 'public');
                $validated['img_url'] = Storage::url($imagePath);
            }

            // Update hanya field yang divalidasi
            $umroh->update($validated);

            Log::info('Umroh updated successfully:', $validated);

            return redirect()
                ->back()
                ->with('success', 'Paket Umroh berhasil diperbarui');

        } catch (\Exception $e) {
            Log::error('Error updating Umroh package: ' . $e->getMessage());
            Log::error('Stack trace: ' . $e->getTraceAsString());
            
            return redirect()
                ->back()
                ->withInput()
                ->with('error', 'Terjadi kesalahan saat memperbarui paket Umroh');
        }
    }

        public function destroy($id)
    {
        try {
            $umroh = Umroh::findOrFail($id);

            // Hapus file gambar jika ada
            if ($umroh->img_url) {
                $imagePath = str_replace('/storage/', '', $umroh->img_url);
                if (Storage::disk('public')->exists($imagePath)) {
                    Storage::disk('public')->delete($imagePath);
                }
            }

            // Hapus record dari database
            $umroh->delete();

            return redirect()
                ->route('admin.umroh')
                ->with('success', 'Paket Umroh berhasil dihapus');

        } catch (\Exception $e) {
            Log::error('Error deleting Umroh package: ' . $e->getMessage());
            
            return redirect()
                ->back()
                ->with('error', 'Terjadi kesalahan saat menghapus paket Umroh');
        }
    }
}