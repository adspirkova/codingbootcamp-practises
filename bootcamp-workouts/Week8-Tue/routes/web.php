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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/books', 'BookController@index');
Route::post('/books', 'BookController@store');

Route::get('/books/{id}/edit', 'BookController@edit');
Route::post('/books/{id}/edit', 'BookController@update');

Route::get('/publishers', 'PublisherController@index')->name('publishers.index');
Route::get('/publishers/{publisher_id}', 'PublisherController@show')->name('publishers.show');

Route::get('/books/create', 'BookController@create');

Route::get('/reservations', 'ReservationController@index');
Route::post('/reservations', 'ReservationController@store');

Route::get('/reservations/create', 'ReservationController@create');
