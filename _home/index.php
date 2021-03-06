<?php
//prepare any data that we will want to output



$projects = [
    'http://www.cbp-exercises.test:8080/' => 'Root folder for exercise',
    'http://www.react-laravel.localhost:8080/' => 'L&R',
    'http://www.solutions.test:8080/'        => 'CBP Solutions',
    'http://www.laravel.test:8080/'      => 'Laravel',
    'http://www.laravel.test-2:8080/'      => 'Laravel-test2',
    'http://www.polls.localhost:8080/'      => 'Polls',
    'http://www.jukebox.test:8080/'      => 'Jukebox',
    'http://www.library.localhost:8080/'        => 'Books Library',
    'http://www.laravel-qa.localhost:8080/'      => 'Prehackaton',
    'http://www.minihackaton.localhost:8080/home'      => 'Zomato',
    'http://www.my-portfolio.test:8080/'  => 'My portfolio',
    'http://www.stackoverflow.com'        => 'Stack Overflow',
    'http://www.recycling-bins.localhost:8080/'        => 'Recycling bins',
    'http://www.laravel-test.localhost:8080/'        => 'Laravel test',
    'http://www.php-intro.test:8080/'        => 'PHP INTRODUCTION',
    
    
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
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <h1 class="jumbotron">Morning sweetheart!</h1>

    <ul class="list-group with badges container">
        <?php foreach ($projects as $url => $name) :?>
        
        <li class="list-group-item list-group-item-secondary">
            <a href="<?= $url ?>"><?= $name ?></a>
        </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>