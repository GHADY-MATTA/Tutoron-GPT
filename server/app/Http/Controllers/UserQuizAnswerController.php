<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserQuizAnswer;

class UserQuizAnswerController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'answers' => 'required|array',
        ]);

        foreach ($request->answers as $answer) {
            UserQuizAnswer::create([
                'user_id'  => $request->user_id,
                'video_id' => $answer['video_id'] ?? null,
                'question' => $answer['question'],
                'selected' => $answer['selected'],
                'correct'  => $answer['correct'],
            ]);
        }

        return response()->json([
            'status' => true,
            'message' => 'Answers saved successfully',
        ]);
    }
}
