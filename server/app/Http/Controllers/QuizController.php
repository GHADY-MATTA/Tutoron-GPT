<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Services\QuizGenerator;
use App\Http\Requests\StoreQuizRequest;


class QuizController extends Controller
{
    public function show($video_id)
    {
        $path = "quizzes/{$video_id}.json";

        if (!Storage::exists($path)) {
            return response()->json([
                'status' => false,
                'message' => 'Quiz not found'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'quiz' => json_decode(Storage::get($path), true)
        ]);
    }

    public function store(Request $request, QuizGenerator $generator)
    {
        $request->validate([
            'video_id' => 'required|string',
            'title' => 'required|string',
            'transcript_raw' => 'required|string'
        ]);

        $quiz = $generator->handle(
            $request->video_id,
            $request->title,
            $request->transcript_raw
        );

        return response()->json([
            'status' => true,
            'message' => 'Quiz generated successfully',
            'quiz' => $quiz
        ]);
    }
}
