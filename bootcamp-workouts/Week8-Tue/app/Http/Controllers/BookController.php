<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Book;
use App\Publisher;

class BookController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }
    public function index()
    {
        $books = Book::all();
        return view('books/index', compact('books'));
    }
    
    public function create()
    {
        $publishers = Publisher::all();
        return view('books/create',compact('publishers'));
    }

    public function store(Request $request)
    {
        $newbook = new Book;
        $newbook->title = $request->title;
        $newbook->publisher_id=$request->publisher_id;
        $newbook->authors=$request->authors;
        $newbook->image=$request->image;
        
        $newbook->save();
        return redirect(action('BookController@index'));
    }
    public function edit($id)
    {
        $book = Book::find($id);
        $publishers = Publisher::all();
        return view('books/edit', compact('book', 'publishers'));
    }
    public function update($id, Request $request)
    {
        $book = Book::find($id);
        $book->title = $request->title;
        $book->publisher_id=$request->publisher_id;
        $book->authors=$request->authors;
        $book->image=$request->image;
        
        $book->save();
        return redirect(action('BookController@index'));
        
    }


}
