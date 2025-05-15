<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TranscriptReceiverController extends Controller
{
    public function receive(Request $request)
    {
        // Initial method setup
    }
}
$request->validate([
    'video_id' => 'required|string',
    'title' => 'required|string',
    'transcript_raw' => 'required|string',
]);
