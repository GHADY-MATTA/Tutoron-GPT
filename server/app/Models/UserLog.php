<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    protected $fillable = [
        'user_id',
        'action',
        'video_url',
        'video_id',
    ];

    // 🧠 Relationships
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
