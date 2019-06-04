<?php

require_once 'DBBlackbox.php';


$genres = [
    'c' => 'crime',
    'a' =>'action',
    'ad' => 'adventure',
];

$genre=   isset($_POST['genre']) ? $_POST['genre'] : '1';


$message = [];

//prepare of empty array
if (!empty($_GET['id'])) {
    $movie = find($_GET['id']);
} else {
    $movie = [
        'title' => null,
        'year' => null,
        'genre' => true,
    ];
}


if ($_POST) {
    $movie['title'] = isset($_POST['title']) ? $_POST['title'] : $movie['title'];
    $movie['year'] = isset($_POST['year']) ? $_POST['year'] : $movie['year'];
    $movie['genre'] = isset($_POST['genre']) ? $_POST['genre'] : $movie['genre'];



    $valid = true;
    
    if ($movie['title'] == '') {
        $message[] = 'not valid';
        $valid = false;

    }

    if ($valid) {
        if(!empty($_GET['id'])) {
            update($_GET['id'], $movie);
            $id = $_GET['id'];
        } else {
            $id = insert ($movie);
        }

        header('Location: form.php?success=1&id='.$id);
    }

}


?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Movie form</title>
</head>
<body>

    <?php var_dump($movie) ?>
    <?php var_dump($message) ?>

    <form action="" method="post">

    <label for="">Type title</label>
    <input type="text" name="title" value="<?= htmlspecialchars($movie['title'])?>">
    <br>

    <label for="">Year of relese:</label>
    <input type="number" name="year" value="<?= htmlspecialchars($movie['year'])?>">
    <br>

    <label for="">Select genre</label>
        <select name="genre" id="">
            <?php foreach ($genres as $value => $name) : ?>
                <option value="<?= $value ?>" <?= $genre == $value ? 'selected' : '' ?>><?= $name ?></option>
            <?php endforeach; ?>
    
        </select>
    <br>
    



    <input type="submit" value='Submit'>
    </form>
    
</body>
</html>