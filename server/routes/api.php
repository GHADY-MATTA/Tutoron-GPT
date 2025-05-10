<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\YouTubeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TranscriptReceiverController;
use Illuminate\Support\Facades\File;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




// AUTH ROUTES
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');



Route::post('/youtube-transcript', [YouTubeController::class, 'store']);

Route::post('/receive-transcript', [TranscriptReceiverController::class, 'receive']);


// routes/api.php
// routes/api.php
Route::get('/summary/{video_id}', function ($video_id) {
    $path = storage_path("app/private/summaries/{$video_id}.json"); // <-- FIXED

    if (!file_exists($path)) {
        return response()->json([
            'status' => false,
            'message' => 'Summary not ready yet'
        ], 404);
    }

    return response()->json([
        'status' => true,
        'summary' => json_decode(file_get_contents($path), true)
    ]);
});



Route::get('/summaries', function () {
    $files = File::files(storage_path('app/private/summaries'));

    $summaries = collect($files)
        ->filter(fn($file) => $file->getExtension() === 'json')
        ->map(fn($file) => pathinfo($file->getFilename(), PATHINFO_FILENAME))
        ->sortDesc()
        ->values();

    return response()->json($summaries);
});
