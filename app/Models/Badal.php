<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Badal extends Model
{
    protected $table = 'badal';

    protected $fillable = [
        'title',
        'kategori',
        'harga',
        'konten',
        'img_url',
    ];
}
