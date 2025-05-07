<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesanan extends Model
{
    protected $table = "pesanan";
    protected $fillable = [
        'nama_lengkap',
        'nama_paket',
        'jenis_pesanan',
        'no_wa',
        'email',
        'alamat',
        'status',
        'is_open',
    ];
}
