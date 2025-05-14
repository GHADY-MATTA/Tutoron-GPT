<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\TranscriptSummarizer;

class TranscriptReceiverController extends Controller
{
public function receive(Request $request, TranscriptSummarizer $summarizer)
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
        Log::debug('🧾 Full transcript content:', [
            'transcript' => $request->transcript_raw
        ]);
        $summary = $summarizer->handle(
            $request->video_id,
            $request->title,
            $request->transcript_raw
        );
        return response()->json([
            'status' => true,
            'message' => 'Transcript received and summarized successfully',
            'video_id' => $request->video_id, // Added this
            'summary' => $summary
        ]);
        Log::info('📥 Transcript received from Node.js', [
            'video_id' => $request->video_id,
            'title' => $request->title,
            'lines' => substr_count($request->transcript_raw, "\n")
        ]);

        Log::debug('🧾 Full transcript content:', [
            'transcript' => $request->transcript_raw
        ]);
        if (empty($request->transcript_raw)) {
            return response()->json([
                'status' => false,
                'message' => 'Transcript is empty'
            ], 400);
        }
'message' => 'Transcript received and summarized successfully'
