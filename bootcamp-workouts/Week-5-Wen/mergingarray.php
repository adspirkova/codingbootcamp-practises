<?php

$movies_per_year [
    1995 => 2,
    1996 => 1,
    1997 => 3,
    1998 => 4,
    1999 => 5
]


$other_movies_per_year [
    2000 => 20,
    2002 => 10,
    2003 => 30,
    2004 => 40,
    2005 => 50
]



// $all_movies_per_year = array_merge($movies_per_year, $other_movies_per_year);

$all_movies_per_year = [];

foreach ($movies_per_year as $year => $movies) {
    $all_movies_per_year [$year] = $movies;
}

foreach ($other_movies_per_year as $year => $movies) {
    $all_movies_per_year [$year] = $movies;
}

var_dump($all_movies_per_year);