<?php

require_once 'DBBlackbox.php';
require_once  'data.php';
include 'list.php';

$genres = [
    'c' => 'crime',
    'a' =>'action',
    'ad' => 'adventure',
];

$genre=   isset($_POST['genre']) ? $_POST['genre'] : '1';


$message = [];

//$data = select();

//prepare of empty array
if (!empty($_GET['id'])) {
    $movies = find($_GET['id']);
    //$movies = $data['title'];
} else {
    $movies = [
        'title' => null,
        'year' => null,
        'genre' => null,
        'release' => true,
        'plot' => null,
        'rating' => null,

    ];
}



//var_dump($_GET);
// var_dump($movies);
//var_dump($data);
//var_dump($_GET['id']);
//intval($_GET['id']);
//var_dump(intval($_GET['id']));
//var_dump($data(intval($_GET['id']));


if ($_POST) {
    $movies['title'] = isset($_POST['title']) ? $_POST['title'] : $movies['title'];
    $movies['year'] = isset($_POST['year']) ? $_POST['year'] : $movies['year'];
    $movies['genre'] = isset($_POST['genre']) ? $_POST['genre'] : $movies['genre'];
    $movies['release'] = isset($_POST['release']) ? $_POST['release'] : $movies['release'];
    $movies['plot'] = isset($_POST['plot']) ? $_POST['plot'] : $movies['plot'];
    $movies['rating'] = isset($_POST['rating']) ? $_POST['rating'] : $movies['rating'];



    $valid = true;
    
    if ($movies['title'] == '') {
        $message[] = 'not valid';
        $valid = false;

    }

    if ($valid) {
        if(!empty($_GET['id'])) {
            update($_GET['id'], $movies);
            $id = $_GET['id'];
        } else {
            $id = insert ($movies);
        }

        header('Location: form.php?success=1&id='.$id);
    }

}

//var_dump($id);

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

    

    <form action="" method="post">

    <label for="">Type title</label>
    <input type="text" name="title" value="<?= htmlspecialchars($movies['title'])?>" id="" >
    <br>

    <label for="">Year of relese:</label>
    <input type="number" name="year" value="<?= htmlspecialchars($movies['year'])?>">
    <br>

    <label for="">Select genre</label>
        <select name="genre" >
            <?php foreach ($genres as $value => $name) : ?>
                <option value="<?= $value ?>" <?= $genre == $value ? 'selected' : '' ?>><?= $name ?></option>
            <?php endforeach; ?>
    
        </select>
    <br>
    
    <div>
    <select name="release">
        <option value="true" selected >Yes</option>
        <option value="false" selected >No</option>
        </select>
    </div>

    <div>
    <textarea name="plot" cols="30" rows="10"><?= htmlspecialchars($movies['plot'])?></textarea>
    </div>

    <div>
    <label for="">Rating from 1 to 10</label>
    <input type="number" name="rating" value="<?= htmlspecialchars($movies['rating'])?>" >
    </div>

    <input type="submit" value='Submit'>
    </form>
    
</body>
</html>