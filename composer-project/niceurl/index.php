<?php 


var_dump($_SERVER['REQUEST_URI']);

$url_parts = explode('/',$_SERVER['REQUEST_URI']);

var_dump($url_parts);


?>