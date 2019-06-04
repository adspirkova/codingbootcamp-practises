<?php
namespace Week6_Tue;

require_once 'BondCase.php';
$name = 'James';

$name .= ' Bond';



$bond_info = [
    'first_name' => 'James',
    'last_name' => 'Bond',
    'gun' => 'Walther PPK',
    'car' => 'Aston Martin',
    'enemy' => 'Stavro Blofeld',
    'relationship_status' => 'widower',
    'cases' => 24
];

// echo $name;


echo 'The name is '.$bond_info['last_name'].'. '.$bond_info['first_name'].' '.$bond_info['last_name'];
echo '<br>';
echo 'One day when I was driving my '.$bond_info['car'].' in the Alps '.$bond_info['enemy'].' came along and made me a widower. If only I had my '.$bond_info['gun'].' with me!';

$bond_info['last_case'] = 'Spectre';
// var_dump($bond_info);


use Week6_Tue\BondCase;

$spectre = new BondCase(2015);
$spectre -> setname('Spectre');
$spectre -> setEnemy('Ernst Stavro Blofeld');
$spectre -> addGirl('Estrella');
$spectre -> addGirl('Lucia Sciarra');
$spectre -> addGirl('Madeleine Swann');


var_dump($spectre);

$casino = new BondCase(2006);
$casino -> setname('Casino Royale');
$casino -> setEnemy('Le Chiffre');
$casino -> addGirl('Vesper Lynd');
$casino -> addGirl('Solange Dimitrios');

var_dump($casino);


echo 'On average Bond has met '.BondCase::getAvgGirlsPerCase().' girls per case.';
?>