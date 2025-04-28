<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class YouTubeControllerTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_stores_youtube_video_successfully()
    {
        $response = $this->postJson('/api/youtube-transcript', [
            'url' => 'https://www.youtube.com/watch?v=Tn6-PIqc4UM',
        ]);

        $response->assertStatus(200)
            ->assertJson([
                'status' => true,
                'message' => 'Video & transcript saved successfully',
            ]);
    }

    /** @test */
    public function it_fails_when_invalid_url_is_provided()
    {
        $response = $this->postJson('/api/youtube-transcript', [
            'url' => 'invalid-url',
        ]);

        $response->assertStatus(422); // validation fails at Laravel validation layer
    }

    /** @test */
    public function it_fails_when_no_url_is_provided()
    {
        $response = $this->postJson('/api/youtube-transcript', []);

        $response->assertStatus(422); // validation fails at Laravel validation layer
    }
}
