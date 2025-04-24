<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('umroh', function (Blueprint $table) {
            $table->id();
            $table->string('img_url');
            $table->string('title');
            $table->string('price');
            $table->string('periode');
            $table->string('hotel_mekkah');
            $table->string('hotel_madinah');
            $table->string('maskapai');
            $table->integer('seat');
            $table->longText('itenerary');
            $table->longText('catatan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('umroh');
    }
};
