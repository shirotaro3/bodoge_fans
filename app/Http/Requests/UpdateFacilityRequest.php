<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFacilityRequest extends FormRequest
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
            'name' => 'filled|max:15',
            'description' => 'filled|max:50',
            'introduction' => 'max:500|nullable',
            'm_facility_type_id' => 'filled|numeric',
            'm_scale_id' => 'filled|numeric',
            'm_budget_id' => 'filled|numeric',
            'm_service_ids' => 'filled|array',
            'm_prefecture_id' => 'filled|numeric',
            'address' => 'filled|max:50',
            'building' => 'max:25|nullable',
            'phone_number' => 'nullable|max20',
            'hp_url' => 'max:50|nullable',
            'facebook' => 'max:25|nullable',
            'twitter' => 'max:25|nullable',
            'instagram' => 'max:25|nullable',
            'line' => 'max:100|nullable',
            'header_image' => 'nullable'
        ];
    }
}
