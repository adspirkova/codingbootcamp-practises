<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\Question;
use App\Answer;


class QuestionController extends Controller
{
    public function __construct()
    {
        // request the login before the page is loaded
        $this->middleware('auth')->except('index');
    }
    public function index()
    {
       
        $query_object = DB::table('questions')
        -> orderby('created_at','desc')
        -> get();
        //dd($query_object);
        $all_questions = Question::orderBy('created_at', 'desc')->get();
        //dd($all_questions);
        return view('questions/index', compact('all_questions'));
    }
    public function show($question_id)
    {
        // $query_object = DB::table('questions')
        // -> where('id', 1)
        // -> get();
        // // dd($query_object);
        // $query_object2 = DB::table('answers')
        // -> where('question_id', 1)
        // -> orderby('created_at','asc')
        // -> get();
        // dd($query_object2);

        // $question = Question::where('id', 1)
        // ->first();
        // $question = Question::find(1);
        // $answers = Answer::orderBy('created_at', 'desc')
        // -> where('question_id', 1)->get();
        //dd($question->answers);


        // return 'This is a detail of a question';
        $question = Question::find($question_id);
        // $answers = Answer::where('question_id', 1)->get();
        $view = view('questions/show',compact('question'));
        return $view;

    }
    public function index2()
    {
        $query_object = DB::table('questions')//FROM `questions`
        // -> limit(10)
        // -> orderby('updated_at')
        -> get() // SELECT *
        ; 
        //$query_object -> where('user_id', 1); // WHERE `user_id` = 1
        //$query_object -> orderby('created_at'); //ORDER BY `created_by`
        dd($query_object);

    }

    public function index3()
    {
        // $questions = Question::get();
        $questions = Question::find(1);
        $answers = Answer::where('question_id', 1)->get();
        var_dump($questions);
        var_dump($answers);
    }

    public function index4(){
        $questions = Question::where('user_id', 1)->get();
        //dd($questions);
        $view = view('questions/index',compact('questions'));
        return $view;
    }
}