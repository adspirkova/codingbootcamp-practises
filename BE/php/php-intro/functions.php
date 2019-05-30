<?php


$name = 'Honza';
function greet ($whom) 
{   
    $name = 'Jan';
    return 'Hello, '.$whom.$name.'!';
}

echo greet('Me');

$greeting = greet('You');

echo $greeting;