<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserYouTubeLog extends Model
{
    use HasFactory;

    protected $table = 'user_youtube_logs'; // ✅  typo from "user_you_tube_logs"

    protected $fillable = [
        'user_id',
        'youtube_video_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function youtubeVideo()
    {
        return $this->belongsTo(YouTubeVideo::class, 'youtube_video_id');
    }
}

