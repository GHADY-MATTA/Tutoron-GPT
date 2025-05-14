<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class YouTubeVideo extends Model
{
    protected $table = 'youtube_videos'; // ✅ Fi

    protected $fillable = [
        'video_id',
        'title',
        'channel',
        'url',
        'language',
        'fetched_at'
    ];

    public function transcripts()
    {
        return $this->hasMany(YouTubeTranscript::class, 'youtube_video_id');
    }
    public function logs()
    {
        return $this->hasMany(UserLog::class, 'video_id', 'video_id'); // FK, PK
    }
    
}
