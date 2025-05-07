<?php

namespace App\Http\Controllers;

use App\Models\Haji;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'harga' => 'required|string|max:255',
            'konten' => 'required|string',
        ]);

        Haji::create($request->all());

        return redirect()->back()->with('message', 'Haji berhasil ditambahkan.');
    }

    // PUT: /haji/{id} (Update)
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'harga' => 'required|string|max:255',
            'konten' => 'required|string',
        ]);

        $haji = Haji::findOrFail($id);
        $haji->update($request->all());

        return redirect()->back()->with('message', 'Data haji berhasil diupdate.');
    }

    // DELETE: /haji/{id} (Delete)
    public function destroy($id)
    {
        $haji = Haji::findOrFail($id);
        $haji->delete();

        return redirect()->back()->with('message', 'Data haji berhasil dihapus.');
    }
}
