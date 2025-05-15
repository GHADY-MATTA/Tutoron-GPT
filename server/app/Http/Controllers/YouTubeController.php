<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class YouTubeController extends Controller
{
    public function store(Request $request)
    {
        // Method logic will be added here
    }
}
public function store(Request $request)
{
    $request->validate([
        'url' => 'required|url'
    ]);

    // Additional logic will be added here
}
