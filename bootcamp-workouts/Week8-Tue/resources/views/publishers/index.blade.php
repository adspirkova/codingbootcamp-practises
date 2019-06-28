
@extends('layouts/app')

@section('content')

<h1>Publishers</h1>
@foreach ($publishers as $publisher)
<div class="publisher">
    <a href="{{route('publishers.show',$publisher->id)}}"><h2>{{$publisher->name}}</h2></a>
    <p>{{$publisher->books()->count()}} published books</p>
</div>
@endforeach

@endsection