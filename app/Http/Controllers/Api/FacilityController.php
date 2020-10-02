<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Facility;

class FacilityController extends Controller
{
    public function index() {
        $facilities = Facility::all();
        return response()->json($facilities);
    }

    public function store(Request $request) {
        $facility = new Facility();
        $facility->fill($request->all());
        $facility->user_id = Auth::user()->id;
        $facility->save();
        return response()->json($facility);
    }
    
    public function show($id) {
        $facility = Facility::find($id);
        return response()->json($facility);
    }
}
