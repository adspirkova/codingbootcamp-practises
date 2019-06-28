<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publisher extends Model
{
    //
    public function books()
    {
        return $this->hasmany('App\Book');
    }
}
