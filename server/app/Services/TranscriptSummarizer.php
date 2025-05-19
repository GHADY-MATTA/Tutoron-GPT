<?php

namespace App\Services;

use Prism\Prism\Prism;
use Prism\Prism\Enums\Provider;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class TranscriptSummarizer
{
    public function handle(string $video_id, string $title, string $transcript): array
    {
        $rawPrompt = file_get_contents(resource_path('prompts/summary.txt'));
        $prompt = str_replace('{{transcript}}', $transcript, $rawPrompt);

        $response = Prism::text()
            ->using(Provider::OpenAI, 'gpt-4-turbo')
            ->withPrompt($prompt)

            ->asText();

        $summary = $response->text;

        Log::info('🧠 AI Summary Generated:', [
            'video_id' => $video_id,
            'title' => $title,
            'summary' => $summary,
        ]);
        // 📝 Save summary as file


        Storage::put("summaries/{$video_id}.json", $summary);
        return json_decode($summary, true);
    }
}
