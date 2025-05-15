<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class BlogController extends Controller
{
    /**
     * Display a listing of the blog.
     */
    public function index()
    {
        $blog = Blog::latest()->get();
        return Inertia::render('Blog', [
            'blog' => $blog,
        ]);
    }

    public function indexAdmin()
    {
        $blog = Blog::latest()->get();
        return Inertia::render('AdminBlog', [
            'blog' => $blog,
        ]);
    }

    /**
     * Display the specified blog.
     */
    public function show(Blog $blog)
    {
        return Inertia::render('BlogDetail', [
            'blog' => $blog,
        ]);
    }

    public function showAdmin(Blog $blog)
    {
        return Inertia::render('AdminBlogDetail', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified blog.
     */
    public function edit(Blog $blog)
    {
        return Inertia::render('Blog/Edit', [
            'blog' => $blog,
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminAddBlog');
    }

    /**
     * Store a newly created blog in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'img_url' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Handle uploaded image if exists
        if ($request->hasFile('img_url')) {
            $imagePath = $request->file('img_url')->store('public/blogs');
            $validated['img_url'] = Storage::url($imagePath);
        }

        Blog::create($validated);

        return redirect()->route('admin.blog.index')->with('success', 'Blog berhasil ditambahkan.');
    }

    /**
     * Remove the specified blog from storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'img_url' => 'sometimes|image|mimes:jpeg,png,jpg,gif|max:2048',
            'created_at' => 'sometimes|date',
        ]);

        // Handle uploaded image if exists
        if ($request->hasFile('img_url')) {
            // Delete old image if exists and is not a URL
            if ($blog->img_url && !filter_var($blog->img_url, FILTER_VALIDATE_URL)) {
                Storage::delete(str_replace('/storage/', 'public/', $blog->img_url));
            }
            
            // Store new image
            $imagePath = $request->file('img_url')->store('public/blogs');
            $validated['img_url'] = Storage::url($imagePath);
        }

        $blog->update($validated);

        return redirect()->route('admin.blog.show', $blog->id)->with('success', 'Blog berhasil diperbarui.');
    }

    /**
     * Remove the specified blog from storage.
     */
    public function destroy(Blog $blog)
    {
        // Delete image if exists and is not a URL
        if ($blog->img_url && !filter_var($blog->img_url, FILTER_VALIDATE_URL)) {
            Storage::delete(str_replace('/storage/', 'public/', $blog->img_url));
        }
        
        $blog->delete();

        return redirect()->route('admin.blog.index')->with('success', 'Blog berhasil dihapus.');
    }
}
