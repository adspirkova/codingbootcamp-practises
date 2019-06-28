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


Route::get('/questions', 'QuestionController@index');
Route::get('/questions/test', 'QuestionController@index2');
Route::get('/questions/{question_id}', 'QuestionController@show')->name('questions.show');
// Route::get('/questions/1', 'QuestionController@index4');

Route::get('/question', 'QuestionController@index3');

Route::get('/answers/{id}', 'AnswerController@show')->name('answer.show');
Route::post('/answers/{id}', 'AnswerController@vote');

Route::get('/categories', 'CategoryController@index');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
