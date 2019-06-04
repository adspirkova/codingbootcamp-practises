<?php

$messages = [];

$valid = true;

$value = 'ahoj-ky';


if(false !== strpos($value, '-')) {// is there a dash '-' anywhere in the string?
    $message[] = 'there is a dash in the input';
    $valid = false;
}


if(is_numeric('123.4'))
{
 var_dump('neni');
}


if(false === filter_var('bruce@wayne.com', FILTER_VALIDATE_EMAIL)) // is the given value a email?
{
 
}



var_dump($value);
var_dump($messages);

?>