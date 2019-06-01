<?php



require 'DBBlackbox.php'; //database operations library
$errors = [];


if (!empty($_GET['id'])) {
    $array = find($_GET['id']);
    $name = $array['name'];
} else {
    $name = null;
}


if ($_POST) {
 //$name = $_POST['name'];
 $name = isset($_POST['name']) ? $_POST['name'] : $name;
 $valid = true;
 if ($name == '') {
    $errors[] = 'Please fill in the name';
    $valid = false;
 }
 if (strlen($name)< 3) {
    $errors[] = 'must be longer than 4 characters';
    $valid = false;
}
 if ($valid) {
    if (!empty($_GET['id'])) {
        update($_GET['id'], ['name' => $name]);
        $id = $_GET['id'];
    } else {
        $id = insert (['name' => $name]);
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
    <title>Document</title>
</head>
<body>

    <?php if (!empty($_GET['success'])) : ?>
        <div class="success">Successfully saved!</div>
    <?php endif; ?>
    


    <?php var_dump($errors) ?>
    <?php var_dump($array) ?>
    
    <form action="" method="post">
        <label for="">Name*</label> <br>
        <input type="text" name="name" value="<?= htmlspecialchars($name) ?>">
    
        <br>
        <input type="submit" value="Save">
    </form>
</body>
</html>