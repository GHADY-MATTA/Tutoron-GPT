<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use App\Traits\ResponseTrait;
use App\Http\Requests\StoreNoteRequest;
use App\Http\Requests\ListNotesRequest;

class NoteController extends Controller
{
    use ResponseTrait;

    // 📝 Create a new note
    public function store(StoreNoteRequest $request)
    {
        

        $note = Note::create([
            'user_id' => $request->user_id,
            'content' => $request->content,
        ]);

        return $this->success($note, 'Note created successfully.');
    }

    // 📥 Get all notes for a user
    public function index(ListNotesRequest $request)
    {
        

        $notes = Note::where('user_id', $request->user_id)->latest()->get();

        return $this->success($notes, 'Notes fetched successfully.');
    }
}
