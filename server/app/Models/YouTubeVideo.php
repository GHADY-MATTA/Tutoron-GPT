<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class YouTubeVideo extends Model
{
    protected $table = 'youtube_videos'; // ✅ Fix table name manually

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
}
