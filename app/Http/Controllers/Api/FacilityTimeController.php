<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateFacilityTimeRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\FacilityTime;

class FacilityTimeController extends Controller
{
    public function update(UpdateFacilityTimeRequest $request, $id) {
        Log::info('[API_FACILITY_TIMES_UPDATE_START]');
        $facility_time = FacilityTime::find($id);
        $facility_time->update($request->all());
        $facility_time->refresh();
        Log::info('[API_FACILITY_TIMES_UPDATE_SUCCESS]');
        return response()->json($facility_time);
    }
}
