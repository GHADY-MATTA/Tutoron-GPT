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
