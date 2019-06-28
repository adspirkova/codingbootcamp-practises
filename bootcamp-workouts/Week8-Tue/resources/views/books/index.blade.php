
@extends('layouts/app')

@section('content')


<h1>Books</h1>
 
<a  href="/books/create"><button>Create new Book</button></a>
<div id="books">
@foreach ($books as $book)
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

