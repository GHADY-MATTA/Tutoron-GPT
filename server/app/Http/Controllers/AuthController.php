<?php



namespace App\Http\Controllers;

use App\Services\AuthService;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    use ResponseTrait;

    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = $this->authService->register($request->only('name', 'email', 'password'));

        return $this->success($user, 'User registered successfully.');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $token = $this->authService->login($request->only('email', 'password'));

        if (!$token) {
            return $this->error('Invalid credentials.', 401);
        }

        return $this->success(['token' => $token], 'Login successful.');
    }

    public function logout(Request $request)
    {
        $this->authService->logout($request->user());

        return $this->success([], 'Logged out successfully.');
    }
}
