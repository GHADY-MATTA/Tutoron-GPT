<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\RequestLog;

class LogAllRequests
{
    public function handle(Request $request, Closure $next): Response
    {
        RequestLog::create([
            'method' => $request->method(),
            'url' => $request->fullUrl(),
            'ip' => $request->ip(),
            'user_id' => optional(auth()->user())->id,
            'controller' => optional($request->route())->getActionName(),
            'payload' => json_encode($request->all())
        ]);

        return $next($request);
    }
}
