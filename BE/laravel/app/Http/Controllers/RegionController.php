<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class RegionController extends Controller
{
    // list of all regions in database 
    public function index()
    {
        $regions = DB::select('SELECT *
                               FROM `region`
                               ORDER BY `name` ASC');
        $regions_view = view('regions/index', [
            'regions' => $regions
        ]);

        return view('regions/htmlwrapper', [
            'content' => $regions_view
        ]);
    }

    public function westernEurope()
    {
        $region = DB::selectOne("SELECT *
                              FROM `region`
                              WHERE `slug` = 'western-europe'");
        var_dump($region);
        
    }
}
