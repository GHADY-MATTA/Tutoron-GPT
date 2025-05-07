<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\YouTubeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TranscriptReceiverController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




// AUTH ROUTES
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');



Route::post('/youtube-transcript', [YouTubeController::class, 'store']);

Route::post('/receive-transcript', [TranscriptReceiverController::class, 'receive']);
