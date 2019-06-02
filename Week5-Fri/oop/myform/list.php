<?php

require_once 'DBBlackbox.php';
require_once 'edit.php'; 
$movies = select();

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
    <?php foreach ($movies as $title => $value):?>
    <p><?= $title?></p>
    <?php endforeach; ?>
</body>
</html>


