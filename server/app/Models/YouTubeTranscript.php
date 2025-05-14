<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class YouTubeTranscript extends Model
{
    // 👇 This tells Laravel to  name
    protected $table = 'youtube_transcripts';

    protected $fillable = [
        'youtube_video_id',
        'text',
        'start',
        'duration'
    ];

    public function video()
    {
        return $this->belongsTo(YouTubeVideo::class, 'youtube_video_id');
    }
}
