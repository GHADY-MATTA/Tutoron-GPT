<?php

namespace App\Traits;

trait YouTubeResponseTrait
{
    use ResponseTrait; // ✅ Reuse the main ResponseTrait inside

    public function pythonScriptError($errorMessage)
    {
        return $this->error('Python script error: ' . $errorMessage, 422);
    }

    public function invalidJsonError()
    {
        return $this->error('Invalid JSON from Python', 500);
    }

    public function noOutputError()
    {
        return $this->error('Python script returned nothing', 500);
    }

    public function saveSuccess()
    {
        return $this->success([], 'Video & transcript saved successfully');
    }
}
