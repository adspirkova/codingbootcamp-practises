
<?php

// Task 1 - VARIABLE
$name = 'Bruce';
$surname = 'Wayne';
?>

<div>
    <p>First name: <?=$name?><br></p>
    <p>Surname: <?=$surname?></p>
</div>


<?php

// Task 2 - VARIABLE
$year_of_birth = 1994;
$height = 168;
?>

<div>
    <p>Year of birth: <?=$year_of_birth?><br></p>
    <p>Height: <?=$height?></p>
</div>


<?php

// Task 3 - CONSTANT

define('SERVER_SOFTWARE', 'Apache');
?>

<div>
    <p>This server is running on <?= SERVER_SOFTWARE ?>.</p>
</div>




<?php

// Task 4 - CONSTANT

define('MY_OS', 'iOS');
?>

<div>
    <p>My operating system is <?= MY_OS ?>.</p>
</div>
