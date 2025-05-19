<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('youtube_transcripts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('youtube_video_id')->constrained('youtube_videos')->onDelete('cascade');
            $table->text('text');
            $table->float('start');
            $table->float('duration');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('youtube_transcripts');
    }
};
