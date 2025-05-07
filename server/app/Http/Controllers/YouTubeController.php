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

        try {
            // Replace with your actual ngrok URL
            $ngrokUrl = 'https://ce7d-185-84-106-185.ngrok-free.app/receive';

            $response = Http::timeout(10)->post($ngrokUrl, [
                'youtube_url' => $videoUrl
            ]);

            if ($response->failed()) {
                Log::error("⛔ Failed to forward to Node", ['response' => $response->body()]);
                return response()->json([
                    'message' => 'Failed to forward YouTube URL to local processor'
                ], 500);
            }

            Log::info("✅ Successfully forwarded. Node response: " . json_encode($response->json()));

            return response()->json([
                'status' => 'ok',
                'message' => 'YouTube URL successfully forwarded to local service',
                'node_response' => $response->json()
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
