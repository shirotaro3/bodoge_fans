<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\Review;

class ReviewController extends Controller
{
    public function store (Request $request) {
        Log::info('[API_REVIEWS_STORE_POST_START]');
        $review = new Review;
        $review->fill($request->all());
        $review->user_id = Auth::user()->id;
        $review->save();
        $review->load('user');
        Log::info('[API_REVIEWS_STORE_POST_SUCCESS]');
        return response()->json($review);
    }

    public function destroy ($id) {
        Log::info('[API_REVIEWS_DESTROY_DELETE_START');
        $review = Review::find($id);
        if (!$review->user_id === Auth::user()->id) {
            Log::info('[API_REVIEWS_DESTROY_DELETE_FAILURE');
            abort(403, 'Forbidden.');
        }
        if (!$review) {
            return response()->json(false);
        }
        $review->delete();
        Log::info('[API_REVIEWS_DESTROY_DELETE_SUCCESS');
        return response()->json($review);
    }
}
