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
        'konten',
        'img_url',
    ];
}
