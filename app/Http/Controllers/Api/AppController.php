<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\MBudget;
use App\Models\MFacilityType;
use App\Models\MPrefecture;
use App\Models\MScale;
use App\Models\MService;
use App\Models\Like;

// フロント側でリロード時にcallするAPIを少なくしたいため、初期化に必要なデータを一つにまとめている。
class AppController extends Controller
{
    public function init()
    {
        $scales = MScale::all();
        $budgets = MBudget::all();
        $facilityTypes = MFacilityType::all();
        $prefectures = MPrefecture::all();
        $services = MService::all();
        if (Auth::check()) {
            $user = Auth::user();
            $user->load('likes');
        } else {
            $user = '';
        }
        return response()->json([
            'scales' => $scales,
            'budgets' => $budgets,
            'facilityTypes' => $facilityTypes,
            'prefectures' => $prefectures,
            'services' => $services,
            'user' => $user
        ]);
    }
}
