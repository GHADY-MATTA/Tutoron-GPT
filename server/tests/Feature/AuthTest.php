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
/** @test */
public function a_user_can_login()
{
    // Test user login logic here
}
$user = User::create([
    'name' => 'Login User',
    'email' => 'login@example.com',
    'password' => Hash::make('password123'),
]);
$response = $this->postJson('/api/login', [
    'email' => 'login@example.com',
    'password' => 'password123',
]);
$response->assertStatus(200)
    ->assertJsonStructure([
        'status',
        'message',
        'data' => ['token'],
    ]);
/** @test */
public function a_user_can_logout()
{
    // Test user logout logic here
}
$user = User::create([
    'name' => 'Logout User',
    'email' => 'logout@example.com',
    'password' => Hash::make('password123'),
]);

$token = $user->createToken('auth_token')->plainTextToken;
$response = $this->withHeaders([
    'Authorization' => 'Bearer ' . $token,
])->postJson('/api/logout');
$response->assertStatus(200)
    ->assertJson([
        'status' => true,
        'message' => 'Logged out successfully.',
    ]);
/** @test */
public function registration_fails_if_email_already_exists()
{
    // Test registration failure with duplicate email
}
User::create([
    'name' => 'Existing User',
    'email' => 'existing@example.com',
    'password' => Hash::make('password123'),
]);
$response = $this->postJson('/api/register', [
    'name' => 'Another User',
    'email' => 'existing@example.com',
    'password' => 'password123',
]);
$response->assertStatus(422) // Validation error
    ->assertJsonValidationErrors('email');
