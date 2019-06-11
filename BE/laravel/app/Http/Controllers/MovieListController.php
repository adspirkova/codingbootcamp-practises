<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MovieListController extends Controller
{
    public function show()
    {
        $header = view('common/header');
        $footer = view('common/footer');
        $list = view('movies/list');
        $content = view('common/html',[
            'header' => $header,
            'list' => $list,
            'footer' => $footer
        ]);
        return $content;
    }

    public function detail()
    {

        $movie_title = 'Venom';

        $header = view('common/header');
        $footer = view('common/footer');
        $info = view('movie_of_week/info', [
            'title' => $movie_title
        ]);
        $cast = view('movie_of_week/cast');
        $trailer = view('movie_of_week/trailer');
        $main = view('movie_of_week/main', [
            'info' => $info,
            'cast' => $cast,
            'trailer' => $trailer,
        ]);
        $content = view('common/html',[
            'header' => $header,
            'main'  => $main,
            'footer' => $footer
        ]);
        return $content;
    }
}
