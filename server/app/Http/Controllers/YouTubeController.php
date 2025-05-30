<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\StoreYouTubeUrlRequest;
class YouTubeController extends Controller
{
    public function store(StoreYouTubeUrlRequest $request)
    {
        

        $videoUrl = $request->input('url');
        Log::info("🎯 Forwarding YouTube URL to Node via ngrok: {$videoUrl}");

        try {
            // Replace with your actual ngrok URL
            $ngrokUrl = 'https://45d9-185-84-105-55.ngrok-free.app/receive';

            // ✅ Fire and forget: don't wait for Node to finish AI
            Http::timeout(seconds: 5)->post($ngrokUrl, [
                'youtube_url' => $videoUrl
            ]);

            // ✅ Return fast to React
            return response()->json([
                'status' => 'ok',
                'message' => 'YouTube URL successfully forwarded to local service. Processing will continue in the background.'
            ]);
        } catch (\Exception $e) {
            Log::error("💥 Exception: " . $e->getMessage());
            return response()->json([
                'message' => 'Error communicating with local Node.js service',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
