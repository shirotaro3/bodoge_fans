<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\Facility;

class FacilityController extends Controller
{
    public function index() {
        Log::info('[FACILITIES_API_QUERY_START]');

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
        $facility = new Facility();
        $facility->fill($request->all());
        $facility->user_id = Auth::user()->id;
        $facility->save();

        $services = $request->input('m_service_id');
        $facility->m_services()->attach($services);

        $facility_time = $facility->facility_time()->create();

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
