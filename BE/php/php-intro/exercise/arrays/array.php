<?php


$colors = [
    'red',
    'green',
    'blue',
];


foreach ($colors as $color) {
    echo 'The next color is '.$color.'<br>';
}


foreach ($colors as $number => $color) {
    echo 'The next color is '.$color.' and number is '.$number.'<br>';
}

var_dump($number);
var_dump($color);
?>