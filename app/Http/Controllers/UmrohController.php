<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\umroh;

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
}
