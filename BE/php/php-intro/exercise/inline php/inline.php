<?php
$gender = 'female';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
     <?php if ($gender == 'male') :?>

        <h1>Hello mister! </h1>

        <?php for ($i = 0; $i < 100; $i++) :?>

        <?php endfor; ?>


    <?php elseif ($gender == 'female') :?>
    
        <h1> Hello, madam</h1>

    
     <?php endif; ?>


     <?php 
        //user admin?
        $user_is_admin = false;
    ?>

    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Eshop</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Link just for administrators</a></li>
        <li><a href="#">Another link just for administrators</a></li>
    </ul>

    <?php if ($user_is_admin == true) :?>
    <?php endif; ?>

</body>
</html>