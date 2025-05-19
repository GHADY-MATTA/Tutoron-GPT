<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

class SummaryController extends Controller
{
    public function show($video_id)
    {
        $path = storage_path("app/private/summaries/{$video_id}.json");

        if (!file_exists($path)) {
            return response()->json([
                'status' => false,
                'message' => 'Summary not ready yet'
            ], 404);
        }

        return response()->json([
            'status' => true,
            'summary' => json_decode(file_get_contents($path), true)
        ]);
    }

    public function index()
    {
        $files = File::files(storage_path('app/private/summaries'));

        $summaries = collect($files)
            ->filter(fn($file) => $file->getExtension() === 'json')
            ->map(function ($file) {
                $id = pathinfo($file->getFilename(), PATHINFO_FILENAME);
                $json = json_decode(file_get_contents($file->getPathname()), true);
                return [
                    'id' => $id,
                    'title' => $json['title'] ?? 'Untitled'
                ];
            })
            ->sortByDesc('id')
            ->values();

        return response()->json($summaries);
    }
}
