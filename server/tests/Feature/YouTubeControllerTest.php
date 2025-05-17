<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\App;
use Tests\TestCase;

class YouTubeControllerTest extends TestCase
{
    /** @test */
    public function it_forwards_youtube_url_and_returns_success_response()
    {
        if (App::environment('testing') && env('CI') === true) {
            $this->markTestSkipped('Skipping YouTube integration test on CI');
        }

        $response = $this->postJson('/api/youtube-transcript', [
            'url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'status' => 'ok',
                'message' => 'YouTube URL successfully forwarded to local service. Processing will continue in the background.'
            ]);
    }
}
