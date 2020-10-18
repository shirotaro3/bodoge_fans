<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Models\Like;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', function () {
    if (Auth::check()) {
        $user = Auth::user();
        $likes = Like::where('user_id', $user->id)->get();
        $user['likes'] = $likes;
    } else {
        $user = '';
    }
    return view('app', ['user' => $user]);
})->where('any', '^(?!.*api).*');

// Auth::routes();

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
