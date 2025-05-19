<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('youtube_videos', function (Blueprint $table) {
            $table->id();
            $table->string('video_id')->unique(); // YouTube ID
            $table->string('title')->nullable();
            $table->string('channel')->nullable();
            $table->string('language')->nullable();
            $table->string('url');
            $table->timestamp('fetched_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('youtube_videos');
    }
};
