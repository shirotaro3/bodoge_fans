<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MScale;
use App\Models\MBudget;
use App\Models\MFacilityType;
use App\Models\MPrefecture;

// フロント側でリロード時にcallするAPIを少なくしたいため、マスタデータのフェッチ先を一つにまとめている。
class MasterController extends Controller
{
    public function index() {
        $scales = MScale::all();
        $budgets = MBudget::all();
        $facilityTypes = MFacilityType::all();
        $prefectures = MPrefecture::all();
        return response()->json([
            'scales' => $scales,
            'budgets' => $budgets,
            'facilityTypes' => $facilityTypes,
            'prefectures' => $prefectures
        ]);
    }
}
