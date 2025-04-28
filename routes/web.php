<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UmrohController;
use App\Http\Controllers\UmrohDetailController;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/umroh', [UmrohController::class, 'index'])->name('user.umroh');

Route::get('/umroh-detail', [UmrohDetailController::class, 'show']);

Route::get('/tentang-kami', function(){
    return Inertia::render('TentangKami');
})->name('tentangKami');

// Route::get('/blog', function(){
//     return Inertia::render('Blog');
// })->name('blog');

Route::get('/blog', [BlogController::class, 'index'])->name('user.blog');

require __DIR__.'/auth.php';
