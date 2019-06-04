<?php
class Dice 
{  
    public $sides = 6;

    public function __construct($sides)
    {
        $this -> sides = $sides ;
    }
    public function roll($sides)
    {
        return rand(1,$sides);
    }
    // public function __toString()
    // {
    //     echo implode(',',sides);
    // }

}


class Dice6 extends Dice
{
    public $sides = 6;
    public function __changeside($sides)
    {
        $this -> sides = $sides ;
    }
}
class Dice4 extends Dice
{
    public $sides = 4;
    public function __changeside($sides)
    {
        $this -> sides = $sides ;
    }
}
class Dice10 extends Dice
{
    public $sides = 10;
    public function __changeside($sides)
    {
        $this -> sides = $sides ;
    }
}
class Dice20 extends Dice
{
    public $sides = 20;
    public function __changeside($sides)
    {
        $this -> sides = $sides ;
    }
}

$number = 1;

$sides = 6;



if ($_POST) {
    $number = isset($_POST['number']) ? $_POST['number'] : $number;
    $sides = isset($_POST['sides']) ? $_POST['sides'] : $sides;
    for ($i = 0; $i < $number; $i++){
        $dice = new Dice($sides);
        // switch ($sides) {
        //     case 4:
        //         return $dice = new Dice4($sides);
        //         break;
        //     case 10:
        //         return $dice = new Dice10($sides);
        //         break;
        //     case 20:
        //         return $dice = new Dice20($sides);
        //         break;
        //     case 6:
        //     default:
        //         return $dice = new Dice6($sides);
        //         break; 
        // }
        $dice -> roll($sides);     
    };
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
        <option value="4"<?= $sides == 4 ? ' selected' : '' ?>>4</option>
        <option value="6"<?= $sides == 6 ? ' selected' : '' ?>>6</option>
        <option value="8"<?= $sides == 8 ? ' selected' : '' ?>>8</option>
        <option value="10"<?= $sides == 10 ? ' selected' : '' ?>>10</option>
        <option value="20"<?= $sides == 20 ? ' selected' : '' ?>>20</option>
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