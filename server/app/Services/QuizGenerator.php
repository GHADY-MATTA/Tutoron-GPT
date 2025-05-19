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

    $rawPrompt = file_get_contents(resource_path('prompts/quiz.txt'));
    $prompt = str_replace('{{transcript}}', $transcript, $rawPrompt);


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
