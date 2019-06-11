<?php
//prepare any data that we will want to output



$projects = [
    'http://www.cbp-exercises.test:8080/' => 'Root folder for exercise',
    'http://www.solutions.test:8080/'        => 'CBP Solutions',
    'http://www.laravel.test:8080/'      => 'Laravel',
    'http://www.laravel.test-2:8080/'      => 'Laravel-test2',
    'http://www.jukebox.test:8080/'      => 'Jukebox',
    'http://www.my-portfolio.test:8080/'  => 'My portfolio',
    'http://www.stackoverflow.com'        => 'Stack Overflow',
    
];
//all data is ready, le§s present it

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
    <h1>Morning sweetheart!</h1>

    <ul>
        <?php foreach ($projects as $url => $name) :?>
        
        <li>
            <a href="<?= $url ?>"><?= $name ?></a>
        </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>