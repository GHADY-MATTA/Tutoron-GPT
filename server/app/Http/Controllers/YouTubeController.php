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
use Illuminate\Support\Facades\Log;

public function store(Request $request)
{
    $request->validate([
        'url' => 'required|url'
    ]);

    $videoUrl = $request->input('url');
    Log::info("🎯 Forwarding YouTube URL to Node via ngrok: {$videoUrl}");

    // Further logic will be added here
}
public function store(Request $request)
{
    $request->validate([
        'url' => 'required|url'
    ]);

    $videoUrl = $request->input('url');
    Log::info("🎯 Forwarding YouTube URL to Node via ngrok: {$videoUrl}");

    $ngrokUrl = 'https://00c2-185-84-106-202.ngrok-free.app/receive';

    // Further logic will be added here
}
use Illuminate\Support\Facades\Http;

public function store(Request $request)
{
    $request->validate([
        'url' => 'required|url'
    ]);

    $videoUrl = $request->input('url');
    Log::info("🎯 Forwarding YouTube URL to Node via ngrok: {$videoUrl}");

    $ngrokUrl = 'https://00c2-185-84-106-202.ngrok-free.app/receive';

    // Fire and forget: don't wait for Node to finish AI
    Http::timeout(5)->post($ngrokUrl, [
        'youtube_url' => $videoUrl
    ]);

    // Further logic will be added here
}
Http::timeout(5)->post($ngrokUrl, [
    'youtube_url' => $videoUrl
]);
return response()->json([
    'status' => 'ok',
    'message' => 'YouTube URL successfully forwarded to local service. Processing will continue in the background.'
]);
try {
    Http::timeout(5)->post($ngrokUrl, [
        'youtube_url' => $videoUrl
    ]);

    return response()->json([
        'status' => 'ok',
        'message' => 'YouTube URL successfully forwarded to local service. Processing will continue in the background.'
    ]);
} catch (\Exception $e) {
    // Handle exception
}
Log::error("💥 Exception: " . $e->getMessage());
return response()->json([
    'message' => 'Error communicating with local Node.js service',
    'error' => $e->getMessage()
], 500);
public function store(Request $request)
{
    $request->validate([
        'url' => 'required|url'
    ]);

    $videoUrl = $request->input('url');
    Log::info("🎯 Forwarding YouTube URL to Node via ngrok: {$videoUrl}");

    try {
        $ngrokUrl = 'https://00c2-185-84-106-202.ngrok-free.app/receive';

        Http::timeout(5)->post($ngrokUrl, [
            'youtube_url' => $videoUrl
        ]);

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
$request->validate([
    'url' => 'required|url'
]);
Log::error("💥 Exception during communication with ngrok: " . $e->getMessage());
return response()->json([
    'status' => 'ok',
    'message' => 'YouTube URL successfully forwarded'
]);
return response()->json([
    'message' => 'Error with Node.js communication',
    'error' => $e->getMessage()
], 500);
Log::info("🎯 Forwarding YouTube URL to Node: {$videoUrl}, ngrok URL: {$ngrokUrl}");
public function sendToNode($ngrokUrl, $videoUrl)
{
    Http::timeout(5)->post($ngrokUrl, [
        'youtube_url' => $videoUrl
    ]);
}
return response()->json([
    'message' => 'Failed to forward YouTube URL',
    'error' => $e->getMessage(),
    'error_code' => $e->getCode()
], 500);
