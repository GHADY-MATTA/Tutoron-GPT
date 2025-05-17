<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('user_youtube_logs', function (Blueprint $table) {
            $table->id();

            // Foreign key to users
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            // Just store the YouTube video ID as a string (no foreign key)
            $table->string('youtube_video_id');

            // Full YouTube URL (optional)
            $table->string('video_url')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('user_youtube_logs');
    }
};
