<?php 
namespace Tests\Feature;

use Tests\TestCase;

class YouTubeControllerTest extends TestCase
{/** @test */
public function it_forwards_youtube_url_and_returns_success_response()
{
        // Test logic for forwarding YouTube URL
        $response = $this->postJson('/api/youtube-transcript', [
            'url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        ]);
    }

// Test methods will be added here
}