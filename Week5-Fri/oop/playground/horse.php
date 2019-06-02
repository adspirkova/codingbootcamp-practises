<?php
 
require_once ('vehicle.php');

class Horse extends Vehicle
{
    public $wheels_count = 0;
    public $is_fed = false;

    public function feed()
    {
        return $this -> is_fed = true; // WTF?!?
    }
}


$mustang = new Horse;
$mustang -> feed();

var_dump($mustang);

?>