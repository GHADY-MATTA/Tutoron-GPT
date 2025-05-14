<?php

namespace App\Services;

use Prism\Prism\Prism;
use Prism\Prism\Enums\Provider;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class TranscriptSummarizer
{    public function handle(string $video_id, string $title, string $transcript): array
    {
        $prompt = <<<EOT
You are an advanced AI learning assistant designed to convert raw video transcripts into complete educational content packages. The output must be structured JSON designed for advanced learners, including university students and professionals.

Transform the following transcript into valid structured JSON with these fields:
...
EOT;
        $response = Prism::text()
            ->using(Provider::OpenAI, 'gpt-4-turbo')
            ->withPrompt($prompt)
            ->asText();
        $summary = $response->text;
