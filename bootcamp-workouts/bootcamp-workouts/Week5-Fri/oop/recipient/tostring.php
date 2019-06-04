<?php

require_once 'recipient.php';


$me = new Recipient;

$me -> email = 'jan@email.cz';

var_dump($me);