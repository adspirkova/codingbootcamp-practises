<?php


class BlogPost
{
    public $id = null;
    public $headline = null;
    public $text = null;
    public $added_at = null;
    public $user_id  = null;
    public $status = 'not-published';
    

    public function publish()
    {
        return $this -> status = 'published';
    }

    public function __construct($user_id, $headline)
    {
        $this -> user_id = $user_id ;
        $this -> headline = $headline ;
        global $all_posts;
        var_dump($all_posts[] = $headline);
        global $total_posts;
        $total_posts++;
    }
    public function __destruct()
    {
        global $total_posts;
        $total_posts--;
    }

}

$all_posts = [];

$total_posts = 0;


$first_post = new BlogPost(3, 'The first post');
$second_post = new BlogPost(3, 'The second post');


//$first_post -> id = 1;
$first_post -> headline = 'The first post';
$first_post -> text = 'I have decided to write my own blog. This is my first post, beautiful in it\'s simplicity.';
$first_post -> added_at = date('Y-m-d H:i:s');
$first_post -> user_id = 1;
$first_post -> status = 'published';

$second_post -> publish();
var_dump($first_post);
var_dump($second_post);
var_dump($total_posts);
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
    <h1><?= $first_post->headline?></h1>
    <p><?= $first_post->text?></p>
    <p><?= $first_post->added_at?></p>

    <?php foreach ($all_posts as  $key => $value): ?>
       <p><?= $value?> </p>
    <?php endforeach ; ?>
</body>
</html>