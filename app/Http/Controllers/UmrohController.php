<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Umroh;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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

        return inertia('UserUmroh', [
            'umroh' => $umroh,
            'kategori' => $kategori,
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

    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'img_url' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            'title' => 'required|string|max:255',
            'price' => 'required|string',
            'kategori' => 'required|string|in:Promo,Reguler,Ekonomis,Plus,Premium,Eksklusif,Umroh + Tour',
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
}