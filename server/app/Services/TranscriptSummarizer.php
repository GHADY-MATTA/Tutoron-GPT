<?php

namespace App\Services;

use Prism\Prism\Prism;
use Prism\Prism\Enums\Provider;
use Illuminate\Support\Facades\Log;

class TranscriptSummarizer
{
    public function handle(string $video_id, string $title, string $transcript): void
    {
        $prompt = <<<EOT
You are an advanced AI learning assistant designed to convert raw video transcripts into complete educational content packages. The output must be structured JSON designed for advanced learners, including university students and professionals.

Transform the following transcript into valid structured JSON with these fields:

- "title": A catchy, clear title summarizing the main topic
- "objective": 1–2 learning objectives
- "summary": A short paragraph overviewing the topic
- "highlights": Memorable or useful moments from the transcript
- "keyInsights": 3–5 powerful insights or life lessons drawn from the topic
- "keyPoints": 3–7 essential teaching points or explanations
- "concepts": A dictionary of key terms with brief definitions
- "examples": Two real-world examples of applying the concept:
  - One for **children** or beginner learners
  - One for **adults** or advanced learners
- "whyItMatters": Explain why this skill or knowledge is important in real life
- "whatIfNotUsed": What problems arise if this isn’t known or applied
- "useCases": Where and how this topic is used today (industries, roles, daily life)
- "globalBestPractices": A short paragraph about how the topic is approached by top countries, cultures, or institutions (e.g., Japan for discipline, Germany for engineering)
- "visualGuide": (If applicable) Step-by-step breakdown that could be drawn or animated
- "stepsToApply": Checklist or process to use this knowledge
- "reflection": 1 deep thinking or journaling question
- "quiz": 3–5 short self-test questions (MCQ or open-ended)
- "exploreMore": Where to learn more (e.g., books, websites, courses, public figures)
- "finalInsight": A powerful concluding thought or motivational message

Rules:
- Return **valid JSON only**
- Do NOT include extra text, explanation, or markdown
- Be clear, engaging, and make the content usable in **real-world learning** settings
- Teach like a **world-class mentor** would: practically, globally aware, with compassion

Only return valid JSON.

Transcript:
{$transcript}
EOT;

        // Run the prompt using Prism with .asText() since that’s working for you
        $response = Prism::text()
            ->using(Provider::OpenAI, 'gpt-4-turbo')
            ->withPrompt($prompt)
            ->asText();

        $summary = $response->text;

        // Log the summary output
        Log::info('🧠 AI Summary Generated:', [
            'video_id' => $video_id,
            'title' => $title,
            'summary' => $summary,
        ]);

        // All done — no return, just log
    }
}
