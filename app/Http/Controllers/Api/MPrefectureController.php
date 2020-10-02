<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MPrefecture;

class MPrefectureController extends Controller
{
    public function index() {
        $prefectures = MPrefecture::all();
        return response()->json($prefectures);
    }
}
