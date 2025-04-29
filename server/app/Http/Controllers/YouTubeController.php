<?php

namespace App\Http\Controllers;

use App\Models\YouTubeVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Traits\YouTubeResponseTrait;

class YouTubeController extends Controller
{
    use YouTubeResponseTrait;

    public function store(Request $request)
    {
        $request->validate([
            'url' => 'required|url'
        ]);

        $videoUrl = $request->input('url');
        Log::info("🎯 Received YouTube URL: {$videoUrl}");

        $pythonPath = 'C:\\Python313\\python.exe';
        $scriptPath = base_path('scripts/fetch_transcript.py');
        $escapedUrl = escapeshellarg($videoUrl);

        $command = "\"{$pythonPath}\" \"{$scriptPath}\" {$escapedUrl}";
        Log::debug("🛠 Running command: {$command}");

        $output = shell_exec("{$command} 2>&1");

        if (!$output) {
            Log::error("⛔ Python script returned no output.");
            return $this->noOutputError();
        }

        $data = json_decode(trim($output), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            Log::error("❌ JSON decode failed: " . json_last_error_msg());
            return $this->invalidJsonError();
        }

        if (isset($data['error'])) {
            Log::error("⚠️ Python script error: " . $data['error']);
            return $this->pythonScriptError($data['error']);
        }

        // ✅ Check if video already exists
        $video = YouTubeVideo::where('video_id', $data['video_id'])->first();

        if (!$video) {
            // ✅ Save the video only if not already saved
            $video = YouTubeVideo::create([
                'video_id'   => $data['video_id'],
                'title'      => $data['title'],
                'channel'    => $data['channel'],
                'url'        => $videoUrl,
                'language'   => $data['language'],
                'fetched_at' => now(),
            ]);

            // ✅ Save Transcript Lines
            foreach ($data['transcript'] as $line) {
                if (!isset($line['text'])) continue;

                $video->transcripts()->create([
                    'text'     => $line['text'],
                    'start'    => $line['start'] ?? 0,
                    'duration' => $line['duration'] ?? 0,
                ]);
            }

            Log::info("✅ Saved new video and transcript: {$video->video_id}");
        } else {
            Log::info("ℹ️ Video already exists, no need to create again: {$video->video_id}");
        }

        return $this->saveSuccess();
    }
}
