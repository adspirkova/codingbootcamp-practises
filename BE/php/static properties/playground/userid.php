<?php
require_once 'auth.php';



$user_id = 4;

session_start();


var_dump($_SESSION);



$_SESSION['user_id'] = $user_id;


$username = 'Bruce';

$user = [
    'user_id' => $user_id, 
    'username' => $username
];


Auth::addUser(['user_id' => 1, 'username' => 'Kevin']);
Auth::addUser(['user_id' => 2, 'username' => 'Stuart']);
Auth::addUser(['user_id' => 3, 'username' => 'Bob']);
Auth::addUser($user);

var_dump(Auth::getUsers());


$current_user = Auth::getCurrentUser();

var_dump($current_user);
?>