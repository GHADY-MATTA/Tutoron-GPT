<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserQuizAnswer extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'video_id',
        'question',
        'selected',
        'correct',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
