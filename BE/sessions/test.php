<?php 

/* session_start();


var_dump($_SESSION);

$_SESSION['start'] = date('H:i:s');

 */

// at the beginning of a script:
session_start();
 
// at the beginning of a form:
$messages = [];
 
if (!empty($_SESSION['flashed_messages'])) {
 
    $messages = $_SESSION['flashed_messages'];
 
    unset($_SESSION['flashed_messages']);
}
 
// after the form data has been saved:
$messages[] = 'Success!';
 
$_SESSION['flashed_messages'] = $messages;
 
header('Location: /some/url?id=1');

?>