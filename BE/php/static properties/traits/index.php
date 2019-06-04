<?php


namespace Traits;

require_once 'traits.php';
require_once 'wold.php';
require_once 'dog.php';
require_once 'domesticated.php';



$dog = new Dog;

$wolf = new Wolf;


$dog -> beFed();


var_dump($dog);
var_dump($wolf);

