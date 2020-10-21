<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class CreateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:10',
            'email' => 'required|email',
            'sex' => [
                'required',
                Rule::in(['male', 'female', 'other']),
            ],
            'birthday' => 'required',
            'password' => 'required|min:8|max:16',
            'password_confirmation' => 'required|same:password',
        ];
    }
}
