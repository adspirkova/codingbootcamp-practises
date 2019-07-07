<?php

var_dump($_FILES);


move_uploaded_file($_FILES['uploaded_file']['tmp_name'], __DIR__.'/'.$_FILES['uploaded_file']['name']);
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Upload file</title>
</head>
<body>
    <form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="uploaded_file" id="file_input">
    <br>
    <br>
    <div id="upload_button">UPLOAD</div>
    <input type="submit" value="Upload!">
    
    </form>

    <script>
    document.getElementById('upload_button').addEventListener('click', ()=> {
        document.getElementById('file_input').click()
    })
    </script>
</body>
</html>