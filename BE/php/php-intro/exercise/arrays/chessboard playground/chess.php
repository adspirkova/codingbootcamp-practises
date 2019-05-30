
<?php
$class = '.board .white';
$white = 'white';
$black = 'black';
?>

<div class="board">

    <?php if ($class == '.board .white') :?>
    <?php for ($i = 0; $i < 8; $i++) :?>
    <div class="row">
        <?php for ($j = 0; $j < 4; $j++) :?>
        <?php if ($i%2 === 0) :?>
        <div class=<?=$white?>></div>
        <div class=<?=$black?>></div>
        <?php endif; ?>
        <?php if ($i%2 === 1) :?>
        <div class=<?=$black?>></div>
        <div class=<?=$white?>></div>
        <?php if ($i === 2 && $j === 1) :?>
        
        <?php endif; ?>
        <?php endif; ?>
        <?php endfor; ?> 
    </div>
   
    <?php endfor; ?>        
    <?php endif; ?>
</div>
<div>
<?php include "http://classes.codingbootcamp.cz/assets/classes/33/pieces/whites/king.png" ?>
</div>