<?php

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



// Route::get('/', 'IndexController@index');

Route::get('/', 'HomeController@show');
Route::get('/listofmovies', 'MovieListController@show');
Route::get('/movie_of_week/venom','MovieListController@detail');

Route::get('/regions','RegionController@index');
Route::get('/western-europe','RegionController@westernEurope');