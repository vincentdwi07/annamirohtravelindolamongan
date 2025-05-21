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
        Schema::table('haji', function (Blueprint $table) {
            // Hapus kolom konten
            $table->dropColumn('konten');

            // Tambah kolom baru
            $table->string('periode')->nullable();
            $table->string('hotel_mekkah')->nullable();
            $table->string('hotel_madinah')->nullable();
            $table->string('maskapai')->nullable();
            $table->integer('seat')->nullable();
            $table->longText('itenerary')->nullable();
            $table->longText('catatan')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('haji', function (Blueprint $table) {
            // Kembalikan kolom konten
            $table->longText('konten')->nullable();

            // Hapus kolom baru
            $table->dropColumn([
                'periode', 
                'hotel_mekkah', 
                'hotel_madinah', 
                'maskapai', 
                'seat', 
                'itenerary', 
                'catatan'
            ]);
        });
    }
};
