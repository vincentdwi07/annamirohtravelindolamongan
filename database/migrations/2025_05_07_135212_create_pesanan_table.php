<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('pesanan', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap');
            $table->string('nama_paket');
            $table->string('jenis_pesanan');
            $table->string('no_wa');
            $table->string('email')->nullable();
            $table->text('alamat');
            $table->boolean('status')->default(false);
            $table->boolean('is_open')->default(false);
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('pesanan');
    }
};
