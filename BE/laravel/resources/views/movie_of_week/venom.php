<?php

$movie = [
    'name' => 'Venom',
    'year' => 2018,
    'img_url' => 'venom.jpg',
    'plot' => 'When Eddie Brock acquires the powers of a symbiote, he will have to release his alter-ego "Venom" to save his life.'
];

?>


<section class="weekly-movie">

<h2>Movie of the week</h2>


<div class="movie">

    <img src="/BE/laravel/public/img/venom.jpg" alt="Venom">

    <div>

        <h3><?= $movie['name']?></h3>

        <div class="year"><?= $movie['year']?></div>

        <p><?= $movie['plot']?></p>

    </div>

</div>

</section>