<?php

require_once 'DBBlackbox.php';
require_once 'edit.php'; 
$items = select();
var_dump($items);
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
    <?php foreach ($items as $title => $value):?>
    <p><?= $value['title']?></p>
    <?php endforeach; ?>
</body>
</html>


