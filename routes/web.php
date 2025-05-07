<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\BlogDetailController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UmrohController;
use App\Http\Controllers\UmrohDetailController;
use App\Http\Controllers\HajiController;
use App\Http\Controllers\BadalController;
use App\Http\Controllers\PesananController;
use App\Http\Controllers\DashboardController;

// LOGIN
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// BERANDA
Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


// UMROH
Route::get('/umroh', [UmrohController::class, 'index'])->name('user.umroh');
Route::get('/umroh-detail', [UmrohDetailController::class, 'show']);
Route::get('/umroh-admin', [UmrohController::class, 'indexAdmin'])->name('admin.umroh');
Route::get('/add-umroh-admin', [UmrohController::class, 'indexAddAdmin'])->name('umroh.create');
Route::get('/admin/umroh/add', [UmrohController::class, 'indexAddAdmin'])->name('umroh.add');
Route::post('/admin/umroh/store', [UmrohController::class, 'store'])->name('umroh.store');


// TENTANG KAMI
Route::get('/tentang-kami', function(){
    return Inertia::render('TentangKami');
})->name('tentangKami');

// BLOG
Route::get('/blog', [BlogController::class, 'index'])->name('user.blog');
Route::get('/blog-detail', [BlogDetailController::class, 'show']);

// FAQ
Route::get('/faq', function(){
    return Inertia::render('FAQ');
})->name('faq');

// HAJI
Route::get('/haji', [HajiController::class, 'index'])->name('haji.index');
Route::post('/haji', [HajiController::class, 'store'])->name('haji.store');
Route::put('/haji/{id}', [HajiController::class, 'update'])->name('haji.update');
Route::delete('/haji/{id}', [HajiController::class, 'destroy'])->name('haji.destroy');

// BADAL
Route::get('/badal', [BadalController::class, 'index'])->name('haji.index');
Route::post('/badal', [BadalController::class, 'store'])->name('haji.store');
Route::put('/badal/{id}', [BadalController::class, 'update'])->name('haji.update');
Route::delete('/badal/{id}', [BadalController::class, 'destroy'])->name('haji.destroy');

// PESANAN UMROH, HAJI DAN BADAL
Route::post('/submit-pesanan', [PesananController::class, 'store'])->name('pesanan.store');
Route::post('/pesanan/update-is-open/{id}', [PesananController::class, 'updateIsOpen'])->name('pesanan.updateIsOpen');
Route::post('/pesanan/update-status/{id}', [PesananController::class, 'updateStatus'])->name('pesanan.updateStatus');

require __DIR__.'/auth.php';
