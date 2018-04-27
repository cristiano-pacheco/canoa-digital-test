<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/vehicles', 'VehiclesController@index');
Route::get('/vehicles/{id}', 'VehiclesController@show');
Route::post('/vehicles', 'VehiclesController@store');
Route::put('/vehicles/{id}', 'VehiclesController@update');
Route::delete('/vehicles/{id}', 'VehiclesController@delete');
