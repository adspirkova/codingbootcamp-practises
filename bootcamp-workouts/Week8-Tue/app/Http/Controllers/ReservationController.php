<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Reservation;
use App\Book;
use App\User;

class ReservationController extends Controller
{
    //
    public function __construct()
    {
        $this->middleware('auth')->except('index');
    }
    public function index()
    {
    $reservations=Reservation::paginate(15);
    //dd($reservations);
    return view('reservations/index', compact('reservations'));
    }
    public function create()
    {
        $books = Book::all();
        $users = User::all();
        //dd($users);
        return view('reservations/create',compact('books','users'));
    }
    public function store(Request $request)
    {
        $newReservation = new Reservation;
        $newReservation->user_id = \Auth::user()->id;
        $newReservation->book_id=$request->book_id;
        $newReservation->from=$request->from;
        $newReservation->to=$request->to;
        
        $newReservation->save();
        return redirect(action('ReservationController@index'));
    }
}
