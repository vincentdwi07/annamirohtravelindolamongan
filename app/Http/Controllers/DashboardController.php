<?php

namespace App\Http\Controllers;

use App\Models\Pesanan;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Ambil data pesanan dan urutkan berdasarkan created_at dari yang terbaru
        $pesanan = Pesanan::orderBy('created_at', 'desc')->get();

        // Kembalikan tampilan dashboard dengan data pesanan
        return Inertia::render('Dashboard', [
            'pesanan' => $pesanan,
        ]);
    }
}

