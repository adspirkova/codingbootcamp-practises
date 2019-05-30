<?php

var_dump($_GET);
var_dump($_POST);

$author = isset($_POST['author'])? $_POST['author'] : '' ;
$bio = 'bio';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Forms</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</head>
<body>
<!--     <form action="" method="post">
        
        <input type="text" name="greeting" value="J.K.Rowling">
        <input type="password" name="password" value="">
        
        <textarea type="text" id="" name="harry" cols="30"  rows="10" value="harry"></textarea>
        <input type="submit" value="Submit!">

    </form> -->

    <?php if(isset($_POST['author'])) : ?>
    <h1>Hello,  <?=$_POST['author']?></h1>
    <?php endif;?>
    <h2>
    Form fields</h2>

    <form action="" method="post">
        <div class="form-group">
            <label for="">Name</label>
            <input type="text" name="author" id="" value="<?=$author?>" class="form-control">
            <input type="submit" value="Submit!" class="btn-primary">
        </div>

        <div class="form-group">
            <label for="">Name</label>
            <textarea type="text" name="bio" id="" class="form-control" cols="30"  rows="10" ><?= htmlspecialchars($bio)?></textarea>
            <input type="submit" value="Submit!" class="btn-primary">
        </div>
    </form>
</body>
</html>