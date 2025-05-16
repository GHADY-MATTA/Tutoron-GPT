<?php

namespace App\Services;

use Prism\Prism\Prism;
use Prism\Prism\Enums\Provider;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;


class QuizGenerator
{
    public function handle(string $video_id, string $title, string $transcript): array
    {
        // ⬅️ Allow up to 5 minutes for this AI request only
        set_time_limit(300);

        $prompt = <<<EOT
You are an expert AI tutor. Your job is to generate a high-quality multiple-choice quiz from the following transcript.

Each question must be directly tied to one of the following core educational sections extracted from the transcript:

- summary
- keyPoints
- keyInsights
- examples
- whyItMatters
- whatIfNotUsed
- useCases
- globalBestPractices
- stepsToApply
- concepts

Generate at least 10 questions maximum(generate more question if the transcript is too big). Each question must:

- Be linked to one of the above sections using a "section" field
- Include a short, clear "question"
- Provide 4 answer choices in an "options" object (keys: a, b, c, d)
- Mark the correct answer using the "correct" key (value: "a", "b", "c", or "d")

Format the final response as a strict valid JSON array like this:

[
  {
    "section": "keyPoints",
    "question": "Which of the following is a key teaching point?",
    "options": {
      "a": "...",
      "b": "...",
      "c": "...",
      "d": "..."
    },
    "correct": "b"
  },
  ...
]

Rules:
- Only output valid JSON — no markdown, no explanation, no text around the output
- Be clear, concise, and accurate
- Use real material from the transcript — no guesswork
- Use unique questions — avoid repetition
- Avoid trick questions; be constructive and educational

Transcript:
{$transcript}
EOT;

        $response = Prism::text()
            ->using(Provider::OpenAI, 'gpt-4-turbo')
            ->withPrompt($prompt)
            ->asText();

        $quiz = $response->text;

        Log::info('✅ AI Quiz Generated:', [
            'video_id' => $video_id,
            'title' => $title,
            'quiz_length' => substr_count($quiz, '"question":'),
        ]);

        Storage::put("quizzes/{$video_id}.json", $quiz);
        return json_decode($quiz, true);
    }
}
