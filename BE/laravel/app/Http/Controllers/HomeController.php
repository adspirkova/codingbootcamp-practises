<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function show()
    {
        $header = view('common/header');
        $footer = view('common/footer');
        $list = view('movies/list');
        $venom = view('movie_of_week/venom');
        $content = view('common/html',[
            'header' => $header,
            'list' => $list,
            'venom' => $venom,
            'footer' => $footer
        ]);
        return $content;
    }
}
