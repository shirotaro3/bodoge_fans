<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MBudget;

class MBudgetController extends Controller
{
    public function index() {
        $budgets = MBudget::all();
        return response()->json($budgets);
    }
}
