<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\Facility;

class FacilityController extends Controller
{
    public function index() {
        Log::info('[API_FACILITIES_INDEX_QUERY_START]');

        // APIを叩く回数を減らすため、まとめて色々返す
        $facilities = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'events',
            'reviews',
            'likes'
            ])->get();

        Log::info('[API_FACILITIES_INDEX_QUERY_SUCCESS]');
        return response()->json($facilities);
    }

    public function store(Request $request) {
        Log::info('[API_FACILITIES_STORE_POST_START]');

        $facility = DB::transaction(function () use ($request) {
            $facility = new Facility();
            $facility->fill($request->all());
            $facility->user_id = Auth::user()->id;

            // ヘッダー画像の保存
            if ($request->header_image){
                $path = Storage::disk('s3')->putFile('facilities/header', $request->file('header_image'), 'public');
                $facility->header_image_url = Storage::disk('s3')->url($path);
            }
            $facility->save();
            $services = $request->input('m_service_ids');
            $facility->m_services()->sync($services);

            $facility_time = $facility->facility_time()->create();
            return $facility;
        });
        $facility->load(
            'm_services',
            'facility_time',
            'likes',
            'reviews',
            'events',
            'm_budget',
            'm_prefecture',
            'm_scale',
            'm_facility_type'
        );
        Log::info('[API_FACILITIES_STORE_POST_SUCCESS]');
        return response()->json($facility);
    }
    
    public function show($id) {
        Log::info('[API_FACILITIES_SHOW_GET_START]');

        // APIを叩く回数を減らすため、まとめて色々返す
        $facility = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time',
            'events',
            'reviews',
            'likes'
            ])->find($id);

        Log::info('[API_FACILITIES_SHOW_GET_SUCCESS]');
        return response()->json($facility);
    }
}
