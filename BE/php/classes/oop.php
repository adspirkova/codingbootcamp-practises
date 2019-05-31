<?php

require_once 'user.php';
require_once 'user2.php';


$jan = new User('jan');
$steve = new User('steve');


$steve-> id = 1;
$steve-> username = 'Steve';
$steve-> name = 'Steven';
$steve-> password = 'rrrr';



$jan->dumpMe();
$steve->dumpMe();
$jan->__destruct();

echo 'The name of user  '.$steve->name.' is no '.$steve->id;