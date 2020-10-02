<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MScale;

class MScaleController extends Controller
{
    public function index() {
        $scales = MScale::all();
        return response()->json($scales);
    }
}
