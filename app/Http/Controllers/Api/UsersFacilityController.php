<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Facility;
use Illuminate\Support\Facades\Log;

class UsersFacilityController extends Controller
{
    public function index($user_id)
    {
        Log::info('[USERS_API_FACILITIES_INDEX_QUERY_START]');
        $facilities = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'likes',
            ])->withCount('reviews')
                ->where('user_id', $user_id)
                ->paginate(3);

        Log::info('[USERS_API_FACILITIES_INDEX_QUERY_SUCCESS]');
        return response()->json($facilities);
    }
}
