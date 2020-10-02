<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MFacilityType;

class MFacilityTypeController extends Controller
{
    public function index() {
        $facilityTypes = MFacilityType::all();
        return response()->json($facilityTypes);
    }
}
