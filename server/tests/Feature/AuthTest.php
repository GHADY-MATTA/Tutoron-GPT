<?php 
namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthTest extends TestCase
{
use RefreshDatabase;
}/** @test */
public function a_user_can_register()
{
// Test user registration logic here
}
$response = $this->postJson('/api/register', [
    'name' => 'Alice Wonderland',
    'email' => 'alice@example.com',
    'password' => 'password123',
]);
$response->assertStatus(200)
    ->assertJson([
        'status' => true,
        'message' => 'User registered successfully.',
    ]);
$this->assertDatabaseHas('users', [
    'email' => 'alice@example.com',
]);
