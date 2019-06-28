
@extends('layouts/app')

@section('content')


<div class="publisher">
    <h2>{{$publisher->name}}</h2>
    <p>{{$publisher->books()->count()}} published books</p>
    @foreach ($publisher->books as $book)
    <div class="book">
    <img src="{{$book->image}}" alt="title"/>
    <h2>{{$book->title}}</h2>
    <h3>{{$book->authors}}</h3>
    @if($book->publisher)
    <h2>{{$book->publisher->name}}</h2>
    @endif
</div>
@endforeach
</div>


@endsection