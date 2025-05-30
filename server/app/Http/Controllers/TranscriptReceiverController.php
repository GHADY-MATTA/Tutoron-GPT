<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\TranscriptSummarizer;
use App\Services\QuizGenerator; // ✅ Added to support quiz generation
use App\Http\Requests\StoreTranscriptRequest;

class TranscriptReceiverController extends Controller
{
    public function receive(StoreTranscriptRequest $request, TranscriptSummarizer $summarizer, QuizGenerator $quizGen)
    {
        

        Log::info('📥 Transcript received from Node.js', [
            'video_id' => $request->video_id,
            'title' => $request->title,
            'lines' => substr_count($request->transcript_raw, "\n")
        ]);

        Log::debug('🧾 Full transcript content:', [
            'transcript' => $request->transcript_raw
        ]);

        // ✅ Generate Summary
        $summary = $summarizer->handle(
            $request->video_id,
            $request->title,
            $request->transcript_raw
        );

        // ✅ Generate Quiz
        $quizGen->handle(
            $request->video_id,
            $request->title,
            $request->transcript_raw
        );
        


        // ✅ Final response (same as before)
        return response()->json([
            'status' => true,
            'message' => 'Transcript received and summarized successfully',
            'video_id' => $request->video_id,
            'summary' => $summary
        ]);
    }
}
