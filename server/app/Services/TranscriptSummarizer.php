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
        $prompt = <<<EOT
You are an advanced AI learning assistant designed to convert raw video transcripts into complete educational content packages. The output must be structured JSON designed for advanced learners, including university students and professionals.

Transform the following transcript into valid structured JSON with these fields:

- "title": A catchy, clear title summarizing the main topic
- "objective": 1–2 learning objectives
- "summary":  the full content of the transcript so the user can read it and understand the fuul content of the transcript adn the point of it take ur time make it gd !!
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
- "quiz": 5-7 short self-test questions  (as plain strings in an array !)
- "exploreMore": Where to learn more (e.g., books, websites, courses, public figures)
- "finalInsight": A powerful concluding thought or motivational message

Rules:
- Return **valid JSON only**
- Do NOT include extra text, explanation, or markdown
-Do NOT wrap the response in ```json or ```
- Be clear, engaging, and make the content usable in **real-world learning** settings
- Make your answer long, deep, and practical — suitable for real learne
- Teach like a **world-class mentor** would: practically, globally aware, with compassion

Only return valid JSON.

Transcript:
{$transcript}
EOT;

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
