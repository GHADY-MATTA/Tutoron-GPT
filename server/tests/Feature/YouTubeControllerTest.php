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
/** @test */
public function it_forwards_multiple_youtube_urls()
{
    $urls = [
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'https://www.youtube.com/watch?v=J---aiyznGQ'
    ];
    
    foreach ($urls as $url) {
        $response = $this->postJson('/api/youtube-transcript', ['url' => $url]);
        $response->assertStatus(200);
    }
}
$response->assertJsonValidationErrors('url');
/** @test */
public function it_throws_error_for_invalid_url_format()
{
    $response = $this->postJson('/api/youtube-transcript', [
        'url' => 'invalid_url'
    ]);
    
    $response->assertStatus(422); // Validation error
}
/** @test */
public function it_throws_error_for_missing_url_parameter()
{
    $response = $this->postJson('/api/youtube-transcript', []);
    $response->assertStatus(422); // Validation error
}
$response->assertJsonStructure([
    'status',
    'message'
]);
public function it_forwards_youtube_url_and_returns_success_response()
{
    $url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    $response = $this->postJson('/api/youtube-transcript', ['url' => $url]);
    
    $response->assertStatus(200)
        ->assertJson(['status' => 'ok']);
}
try {
    $response = $this->postJson('/api/youtube-transcript', ['url' => $url]);
} catch (\Exception $e) {
    Log::error('Error while testing YouTube URL: ' . $e->getMessage());
}
public function test_forward_youtube_url_with_dynamic_data()
{
    $data = $this->getYouTubeData(); // Replace with actual dynamic data fetching
    $response = $this->postJson('/api/youtube-transcript', $data);
}
