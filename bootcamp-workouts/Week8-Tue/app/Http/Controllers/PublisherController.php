<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Publisher;
use App\Book;

class PublisherController extends Controller
{
    //
    public function index()
    {
        $publishers=Publisher::all();
        //dd($publishers);
        return view('publishers/index', compact('publishers'));
    }

    public function show($id)
    {
        $publisher = Publisher::find($id);
        return view('publishers/show',compact('publisher'));
    }
}
