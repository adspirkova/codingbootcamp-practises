<?php

$year = 1415;
$place = 'Azincourt';
 
$quote = "In the year {$year} a battle of {$place} was fought.";

$quote .= "there was a battle of {$place}";

$number = 101;

$number %= 100;

++$number;

$result = $number++;


/* $row_number = 1;
for ($i = 1000; $i<1100; $i++) {
    if ($row_number == 1) {
        echo '<ul';
    }
    echo '<li>'.$i.'<li>';
}
var_dump('<ul>'); */


$username = 'Adela';

echo 'Hello' . ($username ?: 'unknown person');

