<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function register(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']), // Always hash passwords
        ]);
    }

    public function login(array $credentials)
    {
        if (!Auth::attempt($credentials)) {
            return false; // Login 
        }

        $user = Auth::user();
        $token = $user->createToken('auth_token')->plainTextToken;

        return $token;
    }

    public function logout($user)
    {
        $user->currentAccessToken()->delete();
    }
}
