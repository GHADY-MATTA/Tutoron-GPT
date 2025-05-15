<?php 
namespace Tests\Feature;

use Tests\TestCase;

class PrismConnectionTest extends TestCase
{
// Test methods will be added here
}
public function test_openai_is_responding()
{
    // Test logic for OpenAI connection will be added here
}
$response = Prism::text()
    ->using(Provider::OpenAI, 'gpt-4-turbo')
    ->withPrompt('Hello AI, are you working?')
    ->asText();
$this->assertIsString($response->text);
echo "\n✅ AI Response: " . $response->text . "\n";
// Check if OpenAI API is responding correctly with text
public function test_openai_is_responding()
{
    // Sending prompt to OpenAI GPT-4 turbo using Prism
}
$this->assertIsString($response->text, 'AI response should be a string');
$this->assertNotEmpty($response->text, 'AI response should not be empty');
try {
    $response = Prism::text()
        ->using(Provider::OpenAI, 'gpt-4-turbo')
        ->withPrompt('Hello AI, are you working?')
        ->asText();
} catch (\Exception $e) {
    echo "Error: " . $e->getMessage();
}
Log::info('AI response received: ' . $response->text);
public function test_openai_is_responding()
{
    $response = $this->sendOpenAIRequest('Hello AI, are you working?');
    $this->assertIsString($response->text);
    $this->assertNotEmpty($response->text);
}
private function sendOpenAIRequest(string $prompt)
{
    return Prism::text()
        ->using(Provider::OpenAI, 'gpt-4-turbo')
        ->withPrompt($prompt)
        ->asText();
}
$response = $this->sendOpenAIRequest('Hello AI, are you working?');
$this->assertArrayHasKey('text', (array) $response);
if (!isset($response->text)) {
    Log::error('Invalid AI response structure');
}
$this->assertIsString($response->text ?? '', 'AI response should be a string');
public function test_openai_with_empty_prompt()
{
    $response = $this->sendOpenAIRequest('');
    $this->assertNotEmpty($response->text);
}
public function test_different_openai_models()
{
    $response = $this->sendOpenAIRequest('Test GPT-3 model', 'gpt-3');
    $this->assertIsString($response->text);
}
