<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateFacilityTimeRequest;
use App\Models\FacilityTime;
use Illuminate\Support\Facades\Log;

class FacilityTimeController extends Controller
{
    public function update(UpdateFacilityTimeRequest $request, $id)
    {
        Log::info('[API_FACILITY_TIMES_UPDATE_START]');
        $facility_time = FacilityTime::find($id);
        $facility_time->update($request->all());
        $facility_time->refresh();
        Log::info('[API_FACILITY_TIMES_UPDATE_SUCCESS]');
        return response()->json($facility_time);
    }
}
