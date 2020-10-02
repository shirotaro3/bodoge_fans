<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/users/registration', 'App\Http\Controllers\Auth\RegisterController@register');
Route::post('/users/login', 'App\Http\Controllers\Auth\LoginController@login');
Route::post('/users/logout', 'App\Http\Controllers\Auth\LoginController@logout');

Route::get('/budgets', 'App\Http\Controllers\Api\MBudgetController@index');
Route::get('/facilityTypes', 'App\Http\Controllers\Api\MFacilityTypeController@index');
Route::get('/scales', 'App\Http\Controllers\Api\MScaleController@index');
Route::get('/prefectures' ,'App\Http\Controllers\Api\MPrefectureController@index');

Route::middleware(['auth:sanctum'])->group(function (Request $request) {
    Route::post('/facilities/store', 'App\Http\Controllers\Api\FacilityController@store');
});
