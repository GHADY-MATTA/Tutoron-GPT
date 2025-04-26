<?php

namespace App\Http\Controllers;

use App\Models\YouTubeVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class YouTubeController extends Controller
{
    public function store(Request $request)
    {
        // ✅ Validate input
        $request->validate([
            'url' => 'required|url'
        ]);

        $videoUrl = $request->input('url');
        Log::info("🎯 Received YouTube URL: {$videoUrl}");

        //  Define Python + Script path
        $pythonPath = 'C:\\Python313\\python.exe'; // ✅use a verified path from `where python` interepter 
        $scriptPath = base_path('scripts/fetch_transcript.py'); //which Python to use and which script to run.
        $escapedUrl = escapeshellarg($videoUrl); //Escapes the YouTube URL so if it contains any weird characters

        // ✅ Run shell command
        $command = "\"{$pythonPath}\" \"{$scriptPath}\" {$escapedUrl}";// here we cal our python script and pass onto it the url 
        // "C:\Python313\python.exe" "C:\full\path\to\fetch_transcript.py" "https://youtube.com/watch?v=xxxx" 

        Log::debug("🛠 Running command: {$command}");

        $output = shell_exec("{$command} 2>&1"); //raw JSON text printed from Python

        if (!$output) { //if output is empty or wrong
            Log::error("⛔ Python script returned no output.");
            return response()->json(['error' => 'Python script returned nothing'], 500);
        }

        // ✅ Parse JSON
        $data = json_decode(trim($output), true); // convert the json format we got to and pap array true to get an array not an object

        if (json_last_error() !== JSON_ERROR_NONE) {
            Log::error("❌ JSON decode failed: " . json_last_error_msg());
            return response()->json(['error' => 'Invalid JSON from Python'], 500);
        }  //check of the outputs is coorect 

        if (isset($data['error'])) {
            Log::error("⚠️ Python script error: " . $data['error']);
            return response()->json(['error' => $data['error']], 422);
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

        return response()->json(['message' => 'Video & transcript saved successfully']);
    }
}
