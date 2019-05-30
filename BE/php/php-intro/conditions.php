<?php
$a = 456;

// if ($a == 123) {
//     echo 'It is the same';
// }

// if ($a = 123) {
//     echo 'It is the same';
// }

// if (123 = $a) {
//     echo 'It is the same';
// }

$gender = 'male' ;

switch ($gender) {
    case 'man':
    case 'male':
        echo 'You are a male';
        break;
    case 'woman':
    case 'female':
        echo 'You are a female';
        break; 
    default: 
        echo 'You are soemthing else';
        break; 
}