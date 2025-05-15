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
    }$response->assertStatus(200)
    ->assertJson([
        'status' => 'ok',
        'message' => 'YouTube URL successfully forwarded to local service. Processing will continue in the background.'
    ]);


    // Test methods will be added here/** @test */
    public function it_forwards_youtube_url_and_returns_success_response()
    {
        // Testing the forwarding of YouTube URL
    }
}public function it_forwards_youtube_url_and_returns_success_response()
{
    $data = ['url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'];
    $response = $this->postJson('/api/youtube-transcript', $data);
    
    $response->assertStatus(200)
        ->assertJson([
            'status' => 'ok',
            'message' => 'YouTube URL successfully forwarded to local service. Processing will continue in the background.'
        ]);
}
Log::info('Sending YouTube URL request:', $data);
$response->assertJson([
    'status' => 'ok',
    'message' => 'YouTube URL successfully forwarded.'
]);
Log::info('Request data:', $data);
Log::info('Response received:', $response->json());
