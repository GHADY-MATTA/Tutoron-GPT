<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class YouTubeController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'url' => 'required|url'
        ]);
