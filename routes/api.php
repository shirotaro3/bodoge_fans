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

Route::get('/app/init', 'App\Http\Controllers\Api\AppController@init');

// users
Route::prefix('users')->group(function () {
    Route::post('/registration', 'App\Http\Controllers\Auth\RegisterController@register');
    Route::post('/login', 'App\Http\Controllers\Auth\LoginController@login');
    Route::post('/logout', 'App\Http\Controllers\Auth\LoginController@logout');
    // users facility
    Route::get('/{user_id}/facilities', 'App\Http\Controllers\Api\UsersFacilityController@index');
});

// facilities
Route::prefix('facilities')->group(function () {
    Route::get('/', 'App\Http\Controllers\Api\FacilityController@index');
    Route::get('/search', 'App\Http\Controllers\Api\FacilityController@search');
    Route::get('/pickup', 'App\Http\Controllers\Api\FacilityController@random_pick');
    Route::get('/{id}', 'App\Http\Controllers\Api\FacilityController@show');
    // facilities review
    Route::get('/{facility_id}/reviews', 'App\Http\Controllers\Api\FacilitiesReviewController@index');
});

// reviews
Route::prefix('reviews')->group(function () {
    Route::get('/', 'App\Http\Controllers\Api\ReviewController@index');
});

// require auth
Route::middleware('auth:sanctum')->group(function () {

    // auth|facilities
    Route::prefix('facilities')->group(function () {
        Route::post('/', 'App\Http\Controllers\Api\FacilityController@store');
        Route::put('/{id}', 'App\Http\Controllers\Api\FacilityController@update');
        Route::delete('/{id}', 'App\Http\Controllers\Api\FacilityController@destroy');
    });

    // auth|reviews
    Route::prefix('reviews')->group(function () {
        Route::post('/', 'App\Http\Controllers\Api\ReviewController@store');
        Route::delete('/{id}', 'App\Http\Controllers\Api\ReviewController@destroy');
    });

    // auth|facility_times
    Route::prefix('facility_times')->group(function () {
        Route::put('/{id}', 'App\Http\Controllers\Api\FacilityTimeController@update');
    });

    // auth|likes
    Route::prefix('likes')->group(function () {
        Route::post('/', 'App\Http\Controllers\Api\LikeController@store');
        Route::get('/mine', 'App\Http\Controllers\Api\LikeController@mine');
    });

});
