<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserYouTubeLog;

class UserYouTubeLogController extends Controller
{
    public function store(Request $request)
    {
        // ✅ Validate incoming request
        $validated = $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'video_url' => 'required|url',
            'youtube_video_id' => 'nullable|string', // Not required anymore
        ]);

        // ✅ Store the log without checking if video exists in YouTubeVideo table
        $log = UserYouTubeLog::create([
            'user_id'          => $validated['user_id'],
            'video_url'        => $validated['video_url'],
            'youtube_video_id' => $validated['youtube_video_id'] ?? null,
        ]);

        // ✅ Return success response
        return response()->json([
            'status'  => true,
            'message' => 'YouTube log created successfully.',
            'data'    => $log,
        ]);
    }
}
