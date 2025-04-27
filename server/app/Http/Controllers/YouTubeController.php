<?php

namespace App\Http\Controllers;

use App\Models\YouTubeVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Traits\YouTubeResponseTrait; // ✅ Import the specialized trait

class YouTubeController extends Controller
{
    use YouTubeResponseTrait; // ✅ Use the trait inside the controller

    public function store(Request $request)
    {
        // ✅ Validate input
        $request->validate([
            'url' => 'required|url'
        ]);

        $videoUrl = $request->input('url');
        Log::info("🎯 Received YouTube URL: {$videoUrl}");

        // ✅ Define Python + Script path
        $pythonPath = 'C:\\Python313\\python.exe';
        $scriptPath = base_path('scripts/fetch_transcript.py');
        $escapedUrl = escapeshellarg($videoUrl);

        // ✅ Run shell command
        $command = "\"{$pythonPath}\" \"{$scriptPath}\" {$escapedUrl}";
        Log::debug("🛠 Running command: {$command}");

        $output = shell_exec("{$command} 2>&1");

        if (!$output) {
            Log::error("⛔ Python script returned no output.");
            return $this->noOutputError(); // ✅ Use trait method
        }

        $data = json_decode(trim($output), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            Log::error("❌ JSON decode failed: " . json_last_error_msg());
            return $this->invalidJsonError(); // ✅ Use trait method
        }

        if (isset($data['error'])) {
            Log::error("⚠️ Python script error: " . $data['error']);
            return $this->pythonScriptError($data['error']); // ✅ Use trait method
        }

        // ✅ Save YouTube Video
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

        Log::info("✅ Saved video and transcript: {$video->video_id}");

        return $this->saveSuccess(); // ✅ Use trait method
    }
}
