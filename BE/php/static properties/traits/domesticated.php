<?php

namespace Traits;


class Domesticated extends Animal
{
    public function beFed()
    {
        $this -> hungry = false;
    }
}