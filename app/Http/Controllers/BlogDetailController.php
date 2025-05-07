<?php

namespace App\Http\Controllers;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogDetailController extends Controller
{
    public function show(Request $request){
        $id = $request->query('id');
        $blog = Blog::findOrFail($id);

        // Ambil blog lain yang bukan blog utama (id sekarang), maksimum 3
        $otherBlogs = Blog::where('id', '!=', $id)
                          ->latest()
                          ->take(5)
                          ->get();

        return Inertia::render("BlogDetail", [
            'blog' => $blog,
            'otherBlogs' => $otherBlogs,
        ]);
    }
}
