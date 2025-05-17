<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use App\Traits\ResponseTrait;

class NoteController extends Controller
{
    use ResponseTrait;

    // 📝 Create a new note
    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'content' => 'required|string',
        ]);

        $note = Note::create([
            'user_id' => $request->user_id,
            'content' => $request->content,
        ]);

        return $this->success($note, 'Note created successfully.');
    }

    // 📥 Get all notes for a user
    public function index(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
        ]);

        $notes = Note::where('user_id', $request->user_id)->latest()->get();

        return $this->success($notes, 'Notes fetched successfully.');
    }
}
