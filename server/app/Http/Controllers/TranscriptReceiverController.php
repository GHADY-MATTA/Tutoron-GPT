<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TranscriptReceiverController extends Controller
{
    public function receive(Request $request)
    {
        // Initial method setup
    }
}
$request->validate([
    'video_id' => 'required|string',
    'title' => 'required|string',
    'transcript_raw' => 'required|string',
]);
Log::info('📥 Transcript received from Node.js', [
    'video_id' => $request->video_id,
    'title' => $request->title,
]);
Log::info('📥 Transcript received from Node.js', [
    'video_id' => $request->video_id,
    'title' => $request->title,
    'lines' => substr_count($request->transcript_raw, "\n")
]);
Log::debug('🧾 Full transcript content:', [
    'transcript' => $request->transcript_raw
]);

use App\Services\TranscriptSummarizer;

$summary = $summarizer->handle(
    $request->video_id,
    $request->title,
    $request->transcript_raw
);
return response()->json([
    'status' => true,
    'message' => 'Transcript received and summarized successfully',
    'video_id' => $request->video_id,
    'summary' => $summary
]);
$request->validate([
    'video_id' => 'required|string',
    'title' => 'required|string',
    'transcript_raw' => 'required|string',
], [
    'video_id.required' => 'The video ID is required.',
    'title.required' => 'The title is required.',
    'transcript_raw.required' => 'The transcript is required.'
]);
