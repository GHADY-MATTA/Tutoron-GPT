<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\YouTubeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TranscriptReceiverController;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\NoteController;
use App\Http\Controllers\UserYouTubeLogController;
use App\Http\Controllers\SummaryController;
use App\Http\Controllers\UserQuizAnswerController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/user-quiz-answers', [UserQuizAnswerController::class, 'store']);


Route::post('/log-user-video', [UserYouTubeLogController::class, 'store']);
Route::get('/notes', [NoteController::class, 'index']);
Route::post('/notes', [NoteController::class, 'store']);



Route::get('/quiz/{video_id}', [QuizController::class, 'show']);
Route::post('/quiz', [QuizController::class, 'store']);


// AUTH ROUTES
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');



Route::post('/youtube-transcript', [YouTubeController::class, 'store']);

Route::post('/receive-transcript', [TranscriptReceiverController::class, 'receive']);





Route::get('/summary/{video_id}', [SummaryController::class, 'show']);
Route::get('/summaries', [SummaryController::class, 'index']);

