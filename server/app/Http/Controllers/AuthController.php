<?php



namespace App\Http\Controllers;

use App\Services\AuthService;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use App\Models\UserLog;


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
        // Validate incoming request
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        //  login via AuthService
        $token = $this->authService->login($request->only('email', 'password'));

        // If login failed
        if (!$token) {
            return $this->error('Invalid credentials.', 401);
        }

        // Get the authenticated user
        $user = auth()->user();
        UserLog::create([
            'user_id' => $user->id,
            'action'  => 'login',
        ]);


        // Return success with token and user info
        return $this->success([
            'token' => $token,
            'user' => [
                'name' => $user->name,
                'email' => $user->email,
            ],
        ], 'Login successful.');
       
    }

    public function logout(Request $request)
    {
        UserLog::create([
            'user_id' => $request->user()->id,
            'action'  => 'logout',
        ]);
        $this->authService->logout($request->user());

        return $this->success([], 'Logged out successfully.');
    }
}
