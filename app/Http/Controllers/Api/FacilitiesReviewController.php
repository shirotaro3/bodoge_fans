<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class FacilitiesReviewController extends Controller
{
    public function index($facility_id)
    {
        Log::info('[FACILITIES_API_REVIEWS_INDEX_QUERY_START]');
        
        $reviews = Review::with(
            'user',
            'facility:id,name'
        )->where('facility_id', $facility_id)
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        Log::info('[FACILITIES_API_REVIEWS_INDEX_QUERY_SUCCESS]');
        return response()->json($reviews);
    }
}
