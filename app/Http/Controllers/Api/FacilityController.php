<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Facility;

class FacilityController extends Controller
{
    public function store(Request $request) {
        $facility = new Facility();
        $facility->fill($request->all());
        $facility->save();
        return responce()->json($facility);
    }
    
    public function show($id) {
        $facility = Facility::find($id);
        return response()->json($facility);
    }
}
