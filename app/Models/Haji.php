<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Haji extends Model
{
    protected $table = 'haji';

    protected $fillable = [
        'title',
        'kategori',
        'harga',
        'periode',
        'hotel_mekkah',
        'hotel_madinah',
        'maskapai',
        'seat',
        'itenerary',
        'catatan',
        'img_url',
    ];
}
