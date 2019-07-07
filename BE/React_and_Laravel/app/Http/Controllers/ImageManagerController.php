<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageManagerController extends Controller
{
    //

    public function index()
    {
        return view('image-manager/index');
    }
    
    // API endpoint returning infomration about images in the public/images folder
    public function images()
    {
        $images_folder = public_path('images');

        $files = scandir($images_folder);
        
        $files = array_filter($files, function($filename) {
            return $filename != '.' && $filename != '..';
        });

        return array_values($files);
    }
}
