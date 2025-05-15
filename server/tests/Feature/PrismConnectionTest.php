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
