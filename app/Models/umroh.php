<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class umroh extends Model
{
    protected $table = "umroh";

    protected $fillable = [
        'img_url',
        'title',
        'kategori',
        'price',
        'periode',
        'hotel_mekkah',
        'hotel_madinah',
        'maskapai',
        'seat',
        'itenerary',
        'catatan'
    ];
}
