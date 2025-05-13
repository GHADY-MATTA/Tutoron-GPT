<?php

namespace Tests\Feature;

use Tests\TestCase;
use Prism\Prism\Prism;
use Prism\Prism\Enums\Provider;

class PrismConnectionTest extends TestCase
{
    public function test_openai_is_responding()
    {
        $response = Prism::text()
            ->using(Provider::OpenAI, 'gpt-4-turbo')
            ->withPrompt('Hello AI, are you working?')
            ->asText();

        // Check response is a string and not empty
        $this->assertIsString($response->text);
        $this->assertNotEmpty($response->text);

        echo "\n✅ AI Response: " . $response->text . "\n";
    }
}
