<?php

namespace App\Http\Controllers;

use App\Models\Pesanan;
use Illuminate\Http\Request;

class PesananController extends Controller
{
    public function create()
    {
        return view('pesanan.create');
    }

    // Menyimpan pesanan baru ke database
    public function store(Request $request)
    {
        // Validasi input
        $validated = $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'nama_paket' => 'required|string|max:255',
            'jenis_pesanan' => 'required|string|max:255',
            'no_wa' => 'required|string|max:15',
            'email' => 'nullable|email|max:255',
            'alamat' => 'required|string',
        ]);

        // Menyimpan data ke dalam database
        Pesanan::create([
            'nama_lengkap' => $request->nama_lengkap,
            'nama_paket' => $request->nama_paket,
            'jenis_pesanan' => $request->jenis_pesanan,
            'no_wa' => $request->no_wa,
            'email' => $request->email,
            'alamat' => $request->alamat,
            'status' => false,  // Default status
            'is_open' => false,  // Default is_open
        ]);

        // Redirect atau memberikan respon sesuai kebutuhan
        return back()->with('success', 'Pendaftaran berhasil!');
    }

    // Menampilkan detail pesanan berdasarkan ID
    public function show($id)
    {
        $pesanan = Pesanan::findOrFail($id); // Mencari pesanan berdasarkan ID

        return view('pesanan.show', compact('pesanan')); // Pastikan ada view pesanan.show
    }

    public function index(Request $request)
    {
        $pesanan = Pesanan::all();

        return inertia('dashboard', [
            'pesanan' => $pesanan
        ]);
    }

    // Fungsi untuk mengubah nilai 'is_open' menjadi 1
    public function updateIsOpen($id)
    {
        $pesanan = Pesanan::findOrFail($id);
        $pesanan->is_open = true;
        $pesanan->save();

        return response()->json(['success' => true]);
    }

    // Fungsi untuk mengubah status menjadi 1 (Diproses)
    public function updateStatus($id)
    {
        $pesanan = Pesanan::findOrFail($id);
        $pesanan->status = true; // Ubah status menjadi 'Diproses'
        $pesanan->save();

        return response()->json(['success' => true]);
    }
}
