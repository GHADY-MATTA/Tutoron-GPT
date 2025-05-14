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
        $videoUrl = $request->input('url');
        Log::info("🎯 Forwarding YouTube URL to Node via ngrok: {$videoUrl}");
        $ngrokUrl = 'https://106d-185-84-106-202.ngrok-free.app/receive';
