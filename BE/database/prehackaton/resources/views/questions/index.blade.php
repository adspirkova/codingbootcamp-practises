@extends('questions/layout')

@section('content')
<section id="banner">
    <div class="container">
        <h1>Questions</h1>
    </div>
</section>

<section id="questions">
    <div class="container">
            @foreach ($all_questions as $question) 
            <div class="question">
                    <div class="question-left">
                        <div class="question-stat">
                            <span>3</span>
                            <label>responses</label>
                        </div>
                        <div class="question-stat">
                            <span>5</span>
                            <label>votes</label>
                        </div>
                    </div>
                    <div class="question-right">
                        <div class="question-name">
                                <a href="{{ route('questions.show', $question->id ) }}">{{ $question->title }}</a></a>
                        </div>
                        <div class="question-info">
                            asked at {{$question->created_at}} by <a href="">{{$question->user_id}}</a>
                        </div>
                    </div>
                </div>
            @endforeach 

        {{-- <div class="question"> --}}
        {{--     <div class="question-left"> --}}
        {{--         <div class="question-stat"> --}}
        {{--             <span>3</span> --}}
        {{--             <label>responses</label> --}}
        {{--         </div> --}}
        {{--         <div class="question-stat"> --}}
        {{--             <span>5</span> --}}
        {{--             <label>votes</label> --}}
        {{--         </div> --}}
        {{--     </div> --}}
        {{--     <div class="question-right"> --}}
        {{--         <div class="question-name"> --}}
        {{--             <a href="#">SceneKit Swift - just play dae scene? Just getting white  --}}{{-- screen?</a> --}}
        {{--         </div> --}}
        {{--         <div class="question-info"> --}}
        {{--             asked at 2017-03-03 14:23:22 by <a href="">slavo</a> --}}
        {{--         </div> --}}
        {{--     </div> --}}
        {{-- </div> --}}
    
</section>
@endsection('content')