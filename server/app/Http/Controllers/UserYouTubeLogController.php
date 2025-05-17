<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserYouTubeLog;
use App\Models\YouTubeVideo;

class UserYouTubeLogController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|integer|exists:users,id',
            'video_id' => 'required|string',
            'video_url' => 'required|url',
        ]);

        // ✅ Find YouTubeVideo by its public YouTube video_id (not DB ID)
        $video = YouTubeVideo::where('video_id', $request->video_id)->first();

        if (!$video) {
            return response()->json(['message' => 'Video not found'], 404);
        }

        // ✅ Create the log
        $log = UserYouTubeLog::firstOrCreate([
            'user_id' => $request->user_id,
            'youtube_video_id' => $video->id,
        ], [
            'video_url' => $request->video_url, // optionally log the URL for audit
        ]);

        return response()->json([
            'status' => true,
            'message' => 'YouTube view logged successfully.',
            'data' => $log
        ]);
    }
}
