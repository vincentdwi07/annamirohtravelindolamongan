<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBadalTable extends Migration
{
    public function up()
    {
        Schema::create('badal', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('kategori');
            $table->string('harga');
            $table->longtext('konten');
            $table->string('img_url')->nullable(); // Jika kamu juga ingin menambahkan img_url
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('badal');
    }
}
