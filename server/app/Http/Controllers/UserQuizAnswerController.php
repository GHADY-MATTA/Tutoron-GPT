<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserQuizAnswer;
use App\Http\Requests\StoreUserQuizAnswerRequest;


class UserQuizAnswerController extends Controller
{
    public function store(StoreUserQuizAnswerRequest $request)
    {
        

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
