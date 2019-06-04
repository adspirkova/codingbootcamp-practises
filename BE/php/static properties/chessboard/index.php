<?php
include 'board.php';
include 'piece.php';
include 'square.php';


$black_pawn = new Piece('p');
$white_queen = new Piece('Q');


$positions_on_turn_1 = [
    1 => [8 => 'r', 7 => 'p', 2 => 'P', 1 => 'R'],
    2 => [8 => 'n', 7 => 'p', 2 => 'P', 1 => 'N'],
    3 => [8 => 'b', 7 => 'p', 2 => 'P', 1 => 'B'],
    4 => [8 => 'q', 7 => 'p', 2 => 'P', 1 => 'Q'],
    5 => [8 => 'k', 7 => 'p', 4 => 'P', 1 => 'K'],
    6 => [8 => 'b', 7 => 'p', 2 => 'P', 1 => 'B'],
    7 => [8 => 'n', 7 => 'p', 2 => 'P', 1 => 'N'],
    8 => [8 => 'r', 7 => 'p', 2 => 'P', 1 => 'R'],
];

$board_on_turn_1 = new Board($positions_on_turn_1);
echo $board_on_turn_1;


$a2 = new Square(1, 2);
$b2 = new Square(2, 2, $white_queen);
$c2 = new Square(3, 2, $black_pawn);
$d2 = new Square(4, 2);
echo $a2;
echo $b2;
echo $c2;
echo $d2;

var_dump($board_on_turn_1);
var_dump($c2);
var_dump($black_pawn);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        html{
            background-color: pink;
        }
        div {
            width: 40px;
            height: 40px;
        }
        .board {
            width: 320px;
            height:320px;
            border: 2px solid red;
            display: flex;
            flex-wrap: wrap;
        }
        .light {
            background-color: blue;
            border: 2px solid black;
            text-align: center;
        }
        .dark {
            background-color: yellow;
            border: 2px solid black;
            text-align: center;
        }
    </style>
</head>
<body>
    
</body>
</html>