
@extends('layouts/app')

@section('content')


<table class="table table-striped">

    <tr>
    <th>Book</th>
    <th>User</th>
    <th>From</th>
    <th>To</th>
    </tr>
    @foreach ($reservations as $reservation)
    <tr>
        <td>{{$reservation->book->title}}</td>
        <td>{{$reservation->user->name}}</td>
        <td>{{$reservation->from}}</td>
        <td>{{$reservation->to}}</td>
    </tr>
    @endforeach
</table>  
{{ $users-> links() }}
<a href="{{action('ReservationController@create')}}"><button type="submit" class="btn btn-primary">Add new reservation</button></a>

@endsection