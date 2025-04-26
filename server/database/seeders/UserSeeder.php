<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'janesmith@example.com',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'Michael Johnson',
                'email' => 'michaelj@example.com',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'Emily Davis',
                'email' => 'emilyd@example.com',
                'password' => Hash::make('password123'),
            ],
            [
                'name' => 'David Wilson',
                'email' => 'davidw@example.com',
                'password' => Hash::make('password123'),
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
