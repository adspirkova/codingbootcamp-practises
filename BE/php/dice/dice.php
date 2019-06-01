<?php
class Dice 
{
   public $sides = [
    4,
    6,
    10,
    20
    ];

   public function __construct($sides)
   {
       $this -> sides = $sides ;
   }
   
   public function roll($sides)
   {
       return rand(1,$sides);
   }

   public function __toString()
   {
        echo implode(',',sides);
   }
}

$number = 1;


$sides = [
    4,
    6,
    10,
    20
];



if ($_POST) {
    $number = isset($_POST['number']) ? $_POST['number'] : $number;
    $sides = isset($_POST['sides']) ? $_POST['sides'] : $sides;
    for ($i = 0; $i < $number; $i++){
        $dice = new Dice($sides);
        $dice -> roll($sides);        
    }
}



var_dump($dice);
var_dump($number);


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DICE Throwing</title>
    <style>
    form {
        display: flex;
    }
    .output {
        display: flex;
    }
    .dice {
        width: 30px;
        height: 30px;
        border: 2px solid black;
        text-align: center;
        margin: 10px;
    }
    </style>
</head>
<body>

<form action="" method="post">
    <div>
        <label for="">How many dices</label>
        <input type="number" name="number" value="<?=htmlspecialchars($number)?>">
    </div>
    
   <div>
    <label for=""></label>
    <select name="sides">
        <?php for ($i = 0; $i < ($dice -> sides ); $i++):?>
        <option value="<?= $dice -> sides?>"><?= $dice -> sides?></option>
        <?php endfor; ?>
    </select>
    </div> 
    <div>
    <input type="submit" value="submit">
    </div>
        
</form>

<div class="output">
    <?php for ($i = 0; $i < $number; $i++):?>
        <div class="dice"><?= $dice -> roll($sides);?></div>
    <?php endfor; ?>
</div>



</body>
</html>