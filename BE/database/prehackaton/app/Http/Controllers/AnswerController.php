<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Answer;
use App\Vote;

class AnswerController extends Controller
{
    //
    public function show($id)
    {
        $answer = Answer::find($id);
        $view = view('answers/show', compact('answer'));
        return $view;
    }

    public function vote($id)
    {
        // gets the request object
        $request = request();
 
        $answer = Answer::find($id);
        
        $vote = new Vote;
        // $vote = new \App\Vote;
        $vote->answer_id = $answer->id;
        

        if ($request->input('up')) {
            $vote->vote = 1;
            $answer->rating++; 
        } elseif($request->input('down')) {
            $vote->vote = -1;
            $answer->rating--; 
        }
         
        $vote->save();
        $answer->save();
         // redirecting to previous page 
        return back();
    }
}
