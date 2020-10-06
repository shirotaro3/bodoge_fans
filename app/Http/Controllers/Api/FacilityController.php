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
        Log::info('[FACILITIES_INDEX_API_QUERY_START]');

        $facilities = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time'
            ])->get();

        Log::info('[FACILITIES_API_QUERY_SUCCESS]');
        return response()->json($facilities);
    }

    public function store(Request $request) {
        Log::info('[FACILITIES_STORE_API_POST_START]');

        $facility = DB::transaction(function () use ($request) {
            $facility = new Facility();
            $facility->fill($request->all());
            $facility->user_id = Auth::user()->id;
            if ($request->header_image){
                $path = Storage::disk('s3')->putFile('facilities/header', $request->file('header_image'), 'public');
                $facility->header_image_url = Storage::disk('s3')->url($path);
            }
            $facility->save();
            $services = $request->input('m_service_ids');
            Log::info($services);
            $facility->m_services()->sync($services);

            $facility_time = $facility->facility_time()->create();
            return $facility;
        });

        Log::info('[FACILITIES_STORE_API_POST_SUCCESS]');
        return response()->json($facility);
    }
    
    public function show($id) {
        $facility = Facility::with([
            'm_prefecture',
            'm_scale',
            'm_budget',
            'm_facility_type',
            'm_services',
            'facility_time'
            ])->find($id);
        return response()->json($facility);
    }
}
