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
use App\Models\umroh;

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
    $promo = Umroh::where('kategori', 'Promo')->first();
    $ekonomis = Umroh::where('kategori', 'Ekonomis')->first();
    $premium = Umroh::where('kategori', 'Premium')->first();
    
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'umrohSamples' => [
            'promo' => $promo,
            'ekonomis' => $ekonomis,
            'premium' => $premium,
        ],
    ]);
});


// UMROH
Route::get('/umroh', [UmrohController::class, 'index'])->name('user.umroh');
Route::get('/umroh-detail', [UmrohDetailController::class, 'show']);
Route::middleware(['auth'])->group(function () {
    Route::prefix('admin/umroh')->group(function () {
        Route::get('/', [UmrohController::class, 'indexAdmin'])->name('admin.umroh');
        Route::get('/create', [UmrohController::class, 'indexAddAdmin'])->name('umroh.create');
        Route::post('/', [UmrohController::class, 'store'])->name('umroh.store');
        Route::get('/{id}', [UmrohController::class, 'showAdmin'])->name('admin.umroh.detail');
        Route::put('/{id}', [UmrohController::class, 'update'])->name('admin.umroh.update');
        Route::delete('/{id}', [UmrohController::class, 'destroy'])->name('admin.umroh.destroy');
    });
});

// HAJI
// Route untuk user (public)
// Route untuk user (public)
Route::get('/haji', [HajiController::class, 'index'])->name('haji.index');

// Routes untuk admin (protected)
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/haji', [HajiController::class, 'indexAdmin'])->name('admin.haji');
    Route::get('/admin/haji/create', [HajiController::class, 'create'])->name('haji.create');
    Route::post('/admin/haji', [HajiController::class, 'store'])->name('haji.store');
    Route::get('/admin/haji/{id}', [HajiController::class, 'show'])->name('admin.haji.detail');
    Route::put('/admin/haji/{id}', [HajiController::class, 'update'])->name('admin.haji.update');
    Route::delete('/admin/haji/{id}', [HajiController::class, 'destroy'])->name('admin.haji.destroy');
});

// BADAL
Route::get('/badal', [BadalController::class, 'index'])->name('badal');
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/badal', [BadalController::class, 'indexAdmin'])->name('admin.badal');
    Route::get('/admin/badal/create', [BadalController::class, 'create'])->name('badal.create');
    Route::post('/admin/badal', [BadalController::class, 'store'])->name('badal.store');    
    Route::get('/admin/badal/{id}', [BadalController::class, 'show'])->name('admin.badal.detail');
    Route::put('/admin/badal/{id}', [BadalController::class, 'update'])->name('admin.badal.update'); // Gunakan PUT untuk update
    Route::delete('/admin/badal/{id}', [BadalController::class, 'destroy'])->name('admin.badal.destroy');
});

// TENTANG KAMI
Route::get('/tentang-kami', function(){
    return Inertia::render('TentangKami');
})->name('tentangKami');

// BLOG
Route::get('/blog', [BlogController::class, 'index'])->name('user.blog');
Route::get('/blog-detail', [BlogDetailController::class, 'show']);
Route::middleware(['auth'])->group(function () {
    Route::get('/admin/blog', [App\Http\Controllers\BlogController::class, 'indexAdmin'])->name('admin.blog.index');
    Route::get('/admin/blog/create', [App\Http\Controllers\BlogController::class, 'create'])->name('admin.blog.create');
    Route::get('/admin/blog/{blog}', [App\Http\Controllers\BlogController::class, 'showAdmin'])->name('admin.blog.show');
    Route::get('/admin/blog/{blog}/edit', [App\Http\Controllers\BlogController::class, 'edit'])->name('admin.blog.edit');
    Route::put('/admin/blog/{blog}', [App\Http\Controllers\BlogController::class, 'update'])->name('admin.blog.update');
    Route::delete('/admin/blog/{blog}', [App\Http\Controllers\BlogController::class, 'destroy'])->name('admin.blog.destroy');
    Route::post('/admin/blog', [App\Http\Controllers\BlogController::class, 'store'])->name('admin.blog.store');
});

// FAQ
Route::get('/faq', function(){
    return Inertia::render('FAQ');
})->name('faq');


// PESANAN UMROH, HAJI DAN BADAL
Route::post('/submit-pesanan', [PesananController::class, 'store'])->name('pesanan.store');
Route::post('/pesanan/update-is-open/{id}', [PesananController::class, 'updateIsOpen'])->name('pesanan.updateIsOpen');
Route::post('/pesanan/update-status/{id}', [PesananController::class, 'updateStatus'])->name('pesanan.updateStatus');

require __DIR__.'/auth.php';
