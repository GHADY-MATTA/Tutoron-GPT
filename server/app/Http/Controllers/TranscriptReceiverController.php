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
try {
    // Forwarding and summarizing logic
} catch (\Exception $e) {
    Log::error('💥 Error while processing transcript: ' . $e->getMessage());
    return response()->json(['message' => 'Error processing transcript.'], 500);
}
return response()->json([
    'status' => true,
    'message' => 'Transcript received and processed.',
    'video_id' => $request->video_id,
    'summary' => $summary
]);
try {
    $summary = $summarizer->handle(
        $request->video_id,
        $request->title,
        $request->transcript_raw
    );
} catch (\Exception $e) {
    Log::error('Error in AI summarizer: ' . $e->getMessage());
    return response()->json(['message' => 'AI summarization failed.'], 500);
}
Log::info('📥 Transcript received and processing started', [
    'video_id' => $request->video_id,
    'title' => $request->title,
    'lines' => substr_count($request->transcript_raw, "\n")
]);
return response()->json([
    'status' => true,
    'message' => 'Transcript received and summarized successfully',
    'video_id' => $request->video_id,
    'summary' => $summary,
    'timestamp' => now()->toDateTimeString(),
    'processing_time' => microtime(true) - LARAVEL_START // Placeholder for actual processing time
]);
$logContext = [
    'video_id' => $request->video_id,
    'title' => $request->title,
    'lines' => substr_count($request->transcript_raw, "\n")
];

Log::info('📥 Transcript received from Node.js', $logContext);
Log::debug('🧾 Full transcript content:', ['transcript' => $request->transcript_raw]);
$logContext = [
    'video_id' => $request->video_id,
    'title' => $request->title,
    'lines' => substr_count($request->transcript_raw, "\n")
];

Log::info('📥 Transcript received from Node.js', $logContext);
Log::debug('🧾 Full transcript content:', ['transcript' => $request->transcript_raw]);
