
<?php

$white = 'white';
$black = 'black';
?>

<div class="board">

    <?php for ($i = 0; $i < 8; $i++) :?>
    <div class="row">
        <?php for ($j = 0; $j < 8; $j++) :?>
        <div class=<?= ($i + $j ) %2 ? $black : $white ?>>
        <?= $i == 3 && $j == 1  ? '<div> <img  src="http://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png" alt="king"> </div>' : "" ?>
        </div>
        <?php endfor; ?> 
    </div>
   
    <?php endfor; ?>        
</div>
<div>

</div>