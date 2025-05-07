<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TranscriptReceiverController extends Controller
{
    public function receive(Request $request)
    {
        $request->validate([
            'video_id' => 'required|string',
            'title' => 'required|string',
            'transcript_raw' => 'required|string',
        ]);

        Log::info('📥 Transcript received from Node.js', [
            'video_id' => $request->video_id,
            'title' => $request->title,
            'lines' => substr_count($request->transcript_raw, "\n")
        ]);

        // ✅ Log the full transcript content (preview or full)
        Log::debug('🧾 Full transcript content:', [
            'transcript' => $request->transcript_raw
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Transcript received successfully',
        ]);
    }
}
