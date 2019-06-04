<?php

class Request
{

    protected static $instance = null; // the singleton - a single instance of this class
 
    public static function getSingleton()
    {
        if (static::$instance === null) { // if the singleton has not been created yet
 
            static::$instance = new static(); // create a new object of this class and store it in the static property
 
        }
 
        return static::$instance; // in any case return what we now have in the static property
    }
    public $get = [];
    public $post = [];

    public function __construct()
    {
        $this -> get = $_GET;
        $this -> post = $_POST;
    }
}

$request = new Request;

echo $request->get[]='foo';



?>