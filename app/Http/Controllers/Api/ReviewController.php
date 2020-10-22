<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateReviewRequest;
use App\Models\Review;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ReviewController extends Controller
{
    public function index()
    {
        Log::info('[REVIEWS_API_INDEX_QUERY_START]');
        $reviews = Review::with(
            'user',
            'facility:id,name'
        )->orderBy('created_at', 'desc')->take(18)->paginate(6);

        Log::info('[REVIEWS_API_INDEX_QUERY_SUCCESS]');
        return response()->json($reviews);
    }

    public function store(CreateReviewRequest $request)
    {
        Log::info('[REVIEWS_API_STORE_POST_START]');
        $review = new Review;
        $review->fill($request->all());
        $review->user_id = Auth::user()->id;
        $review->save();
        $review->load('user');
        Log::info('[REVIEWS_API_STORE_POST_SUCCESS]');
        return response()->json($review);
    }

    public function destroy($id)
    {
        Log::info('[REVIEWS_API_DESTROY_DELETE_START');
        $review = Review::find($id);

        if (!$review->user_id === Auth::user()->id) {
            Log::info('[REVIEWS_API_DESTROY_DELETE_FAILURE');
            abort(403, 'Forbidden.');
        }

        if (!$review) {
            return response()->json(false);
        }
        $review->delete();
        Log::info('[REVIEWS_API_DESTROY_DELETE_SUCCESS');
        return response()->json($review);
    }
}
