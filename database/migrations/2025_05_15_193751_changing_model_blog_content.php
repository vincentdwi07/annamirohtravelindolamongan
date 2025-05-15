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
        Schema::table('blog', function (Blueprint $table) {
            // Ubah tipe data kolom content menjadi TEXT atau LONGTEXT
            $table->longText('content')->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
               Schema::table('blog', function (Blueprint $table) {
            // Kembalikan ke tipe data aslinya jika perlu
            $table->string('content')->change();
        });
    }
};
