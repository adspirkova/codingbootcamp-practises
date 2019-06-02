<?php


class Vehicle
{
    public $wheels_count = null;
    public $color = null;
    public $avg_speed = null;


    public function travel($distance)
    {
        $timetravel = $distance/$avg_speed;
        return $timetravel;
    }
}



class Car extends Vehicle 
{
    public $wheels_count = 4;

    public function change_color($color)
    {
        $this -> color = $color;
    }
}



?>