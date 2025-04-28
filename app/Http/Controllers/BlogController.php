<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

    /**
     * Show the form for creating a new blog.
     */
    public function create()
    {
        return Inertia::render('Blog/Create');
    }

    /**
     * Store a newly created blog in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'img_url' => 'required|string',
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        Blog::create($validated);

        return redirect()->route('blog.index')->with('success', 'Blog created successfully.');
    }

    /**
     * Display the specified blog.
     */
    public function show(Blog $blog)
    {
        return Inertia::render('Blog/Show', [
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

    /**
     * Update the specified blog in storage.
     */
    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'img_url' => 'sometimes|string',
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
        ]);

        $blog->update($validated);

        return redirect()->route('blog.index')->with('success', 'Blog updated successfully.');
    }

    /**
     * Remove the specified blog from storage.
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();

        return redirect()->route('blog.index')->with('success', 'Blog deleted successfully.');
    }
}
