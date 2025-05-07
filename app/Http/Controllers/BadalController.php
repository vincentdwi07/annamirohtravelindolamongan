<?php

namespace App\Http\Controllers;

use App\Models\Badal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BadalController extends Controller
{
    public function index(Request $request)
    {
        $kategori = $request->query('kategori');

        $badal = Badal::where('kategori', $kategori)->first();

        return Inertia::render('UserBadal', [
            'badal' => $badal,
            'kategori' => $kategori
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'harga' => 'required|string|max:255',
            'konten' => 'required|string',
            'img_url' => 'nullable|string',
        ]);

        Badal::create($request->all());

        return redirect()->back()->with('message', 'Badal berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'harga' => 'required|string|max:255',
            'konten' => 'required|string',
            'img_url' => 'nullable|string',
        ]);

        $badal = Badal::findOrFail($id);
        $badal->update($request->all());

        return redirect()->back()->with('message', 'Data badal berhasil diupdate.');
    }

    public function destroy($id)
    {
        $badal = Badal::findOrFail($id);
        $badal->delete();

        return redirect()->back()->with('message', 'Data badal berhasil dihapus.');
    }
}
