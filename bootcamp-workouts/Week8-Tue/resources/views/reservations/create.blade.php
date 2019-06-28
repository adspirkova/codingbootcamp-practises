@extends('layouts/app')

@section('content')

<div class='container'>
  
  <form method="post" action="{{action('ReservationController@store')}}">
      @csrf
      <div class="form-group">
            <label>User</label>
            <select name="user_id" class="form-control">
              @foreach ($users as $user)
              <option value="{{$user->id}}">{{$user->name}}</option>
              @endforeach
            </select>
        </div>
        <div class="form-group">
                <label>Book</label>
                <select name="book_id" class="form-control">
                  @foreach ($books as $book)
                  <option value="{{$book->id}}">{{$book->title}}</option>
                  @endforeach
                </select>
            </div>
      <div class="form-group">
        <label>From</label>
        <input type="date" name="from" class="form-control">
      </div>
      <div class="form-group">
        <label>To</label>
        <input type="date" name="to" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
  </form>

</div>

@endsection