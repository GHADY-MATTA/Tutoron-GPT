<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

// you do NOT need XAMPP
//  running to test with authtest.php using .env.testing
class AuthTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function a_user_can_register()
    {
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
    }

    /** @test */
    public function a_user_can_login()
    {
        // Create a user manually
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
    }

    /** @test */
    public function a_user_can_logout()
    {
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
    }
    /** @test */
    public function registration_fails_if_email_already_exists()
    {
        // Create a user first
        User::create([
            'name' => 'Existing User',
            'email' => 'existing@example.com',
            'password' => Hash::make('password123'),
        ]);

        // Try to register again with same email
        $response = $this->postJson('/api/register', [
            'name' => 'Another User',
            'email' => 'existing@example.com', // duplicate email
            'password' => 'password123',
        ]);

        $response->assertStatus(422) // Validation error
            ->assertJsonValidationErrors('email');
    }

    /** @test */
    public function login_fails_with_wrong_password()
    {
        // Create a user first
        User::create([
            'name' => 'Wrong Password User',
            'email' => 'wrongpass@example.com',
            'password' => Hash::make('correctpassword'),
        ]);

        // Try to login with wrong password
        $response = $this->postJson('/api/login', [
            'email' => 'wrongpass@example.com',
            'password' => 'wrongpassword', // wrong password
        ]);

        $response->assertStatus(401) // Unauthorized
            ->assertJson([
                'status' => false,
                'message' => 'Invalid credentials.',
            ]);
    }

    /** @test */
    public function logout_fails_without_token()
    {
        $response = $this->postJson('/api/logout');

        $response->assertStatus(401); // Unauthorized (no token provided)
    }
}
