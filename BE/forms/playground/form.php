<?php

require 'lib/DBBlackbox.php';


$name = isset($_POST['name']) ? $_POST['name'] : '';
$motivation = isset($_POST['motivation']) ? $_POST['motivation'] : '';
$color = isset($_POST['color']) ? $_POST['color'] : '1';
$gender = isset($_POST['gender']) ? $_POST['gender'] : '1';
$expressdelivery = isset($_POST['express']) && $_POST['express'] == 1;
$express= isset($_POST['express']) && $_POST['express'] == '1'; 
$genders = [
    'm' => 'male',
    'f' => 'female',
    'd' => 'dragon',
    'x' => 'unknown'
];

$colors = [
    'b' => 'blue',
    'p' => 'pink',
    'o' => 'orange',
];


insert($_POST);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forms exercise</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <style>
    html {
        width: 800px;
        margin: 0px auto;
    }</style>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</head>
<body>
    <form action="" method="post">
        <div class="form-group">
            <label for="">Name of the adopter</label><br>
            <input 
                type="text" 
                name="name" 
                value="<?= htmlspecialchars($name) ?>" 
                class="form-control">
        </div>

        <div class="form-group">
            <label for="">Why do you want to adopt a dragon?</label><br>
            <textarea name="motivation" id="" cols="30" rows="10"><?= htmlspecialchars($motivation) ?></textarea>
        </div>

        <div class="form-group">
            <select name="color" id="">
                <?php foreach ($colors as $value =>$name) : ?>
                    <option value="<?= $value ?>" <?= $color == $value ? 'selected': '' ?>><?= $name ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        
        <div class="form-group">
            <?php foreach ($genders as $value =>$name) : ?>
                <input type="radio" name="gender" value="<?= $value ?>" <?= $gender == $value ? 'checked': '' ?>><?= $name ?></input>
            <?php endforeach; ?>
        </div>

        <div class="form-group">
            <input type="hidden" name="delivery" value="0">
            <input type="checkbox" name="delivery" value="1" id="delivery" <?= $expressdelivery ? '' : 'checked ' ?>>
            <label for="delivery">Do you want express delivery?</label>
        </div>

        <div class="form-group">
            <input type="submit" value="Submit" class="form-control btn btn-primary">
        </div>
    </form>
    
    
</body>
</html>