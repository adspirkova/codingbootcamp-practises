
<!-- This is a form file -->


<form action="" method="post">

<?php foreach ($items as $i => $text): ?>
    <input type="text" value="<?=htmlspecialchars($text)?>" name="items[<?=$i?>]"><br>
<?php endforeach; ?>

<input type="text" value="" name="items[<?=count($items)?>]">
<input type="submit" value="Add" class='btn-primary'>

</form>