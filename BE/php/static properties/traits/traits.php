<?php


namespace Traits;


class Animal
{
    protected $hungry = true;
    public function eat()
    {
        $this -> hungry = false;
    }
}




?>