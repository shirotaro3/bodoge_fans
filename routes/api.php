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

Route::get('/masters', 'App\Http\Controllers\Api\MasterController@index');

// users
Route::prefix('users')->group(function () {
    Route::post('registration', 'App\Http\Controllers\Auth\RegisterController@register');
    Route::post('login', 'App\Http\Controllers\Auth\LoginController@login');
    Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout');
});

// facilities
Route::prefix('facilities')->group(function () {
    Route::get('/', 'App\Http\Controllers\Api\FacilityController@index');
    Route::get('/{id}', 'App\Http\Controllers\Api\FacilityController@show');
});

// require auth
Route::middleware('auth:sanctum')->group(function () {

    // auth|facilities
    Route::post('facilities/store', 'App\Http\Controllers\Api\FacilityController@store');

    // auth|likes
    Route::post('likes/store', 'App\Http\Controllers\Api\LikeController@store');
    Route::get('likes', 'App\Http\Controllers\Api\LikeController@index');
});
