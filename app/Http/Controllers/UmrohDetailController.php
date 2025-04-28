<?php

namespace App\Http\Controllers;
use App\Models\Umroh;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UmrohDetailController extends Controller
{
    public function show(Request $request){
        $id = $request->query('id');
        $umroh = Umroh::findOrFail($id);

        return Inertia::render("UserUmrohDetail", [
            'umroh' => $umroh
        ]);
    }
}
