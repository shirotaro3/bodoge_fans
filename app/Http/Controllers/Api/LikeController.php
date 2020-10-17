<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Like;

class LikeController extends Controller
{
    public function mine() {
        Log::info('[LIKES_API_QUERY_START] request:');
        
        $user_id = Auth::user()->id;
        $query = Like::query();
        $query->where('user_id', $user_id);
        $query->with(
            'facility',
            'facility.m_services',
            'facility.facility_time',
            'facility.likes',
            'facility.reviews.user',
            'facility.events',
            'facility.m_budget',
            'facility.m_prefecture',
            'facility.m_scale',
            'facility.m_facility_type'
        )->paginate(8);

        Log::info('[LIKES_API_QUERY_SUCCESS]');
        return response()->json($likes);
    }

    public function store(Request $request) {
        Log::info('[LIKES_API_POST_START] request:'.$request);

        $facility_id = $request->input('facility_id');
        $existingLike = Auth::user()->likes()->where('facility_id', $facility_id);

        if ($existingLike->exists()) {
            // likeがすでにあれば削除
            $existingLike->delete();
        } else {
            // Likeがなければ作成
            Auth::user()->likes()->create(['facility_id' => $facility_id]);
        }
        // 全件返却
        $likes = Auth::user()->likes()->get();

        Log::info('[LIKES_API_POST_SUCCESS]');
        return response()->json($likes);
    }
}
