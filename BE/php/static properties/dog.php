<?php
class Dog
{
    public $name = null;
    public $chip_id = null;
 
    public function __construct()
    {
        static::$nr_of_dogs++;
    }
    
    public function changeChipid($new_id)
    {
        $this -> chip_id = $new_id;
    }

    public static $nr_of_dogs = 0;

    public function addDog()
    {
        static $nr_of_dogs;
    }
 
}


$nr_of_dogs = 0;
function addDog()
{
    global $nr_of_dogs;
    $nr_of_dogs++;
}

?>