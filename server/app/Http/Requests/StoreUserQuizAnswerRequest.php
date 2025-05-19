<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserQuizAnswerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'user_id' => 'required|integer|exists:users,id',
            'answers' => 'required|array',
            'answers.*.question' => 'required|string',
            'answers.*.selected' => 'required|string',
            'answers.*.correct' => 'required|boolean',
            'answers.*.video_id' => 'nullable|string',
            //
        ];
    }
}
