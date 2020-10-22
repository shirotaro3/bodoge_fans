<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Facility;
use Illuminate\Support\Facades\Log;

class UsersFacilityController extends Controller
{
    public function index($id)
    {
        Log::info('[USERS_API_FACILITIES_INDEX_QUERY_START]');
        $facilities = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'events',
            'reviews.user',
            'likes',
            ])->where('user_id', $id)->paginate(5);

        Log::info('[USERS_API_FACILITIES_INDEX_QUERY_SUCCESS]');
        return response()->json($facilities);
    }
}
