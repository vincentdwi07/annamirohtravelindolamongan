<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('haji', function (Blueprint $table) {
            $table->string('img_url')->nullable()->after('konten'); // atau sesuaikan posisi
        });
    }

    public function down(): void
    {
        Schema::table('haji', function (Blueprint $table) {
            $table->dropColumn('img_url');
        });
    }
};
