<?php

function go_to_bree($party)

{
    var_dump($party);
}


$party = [
    'frodo' => 'Frodo',
];

go_to_bree($party);

function change_party(&$party)
{
    unset($party['frodo']);
}

change_party($party);


$a = 123;

$c = &$a;




// Function fo headline

function headline ($text, $importance = 1)
{
    return "<h{$importance}> {$text} </h{$importance}>";
}

echo headline('Hello world');
echo headline('Hello world', 6);


// Passing by reference

$party = [
    'frodo' => 'Frodo',
];


function add_item(&$array, $item)
{

    $array[$item] = $item;
    return $array;
}

add_item($party, 'sam');
var_dump($party);




//Default argument values #1

function element ($element, $innerhtml = '', $attributes = '')
{
    return "<{$element} {$attributes}>{$innerhtml}</{$element}>";
}


echo element('p', ''); // <p></p>

echo element('p', 'some text'); // <p>some text</p>
echo element('p', 'some text', 'class="foo"'); // <p class="foo">some text</p>



// Default argument values #2

function convert_weight($value, $unit = 'kg')
{
    if ($unit === 'kg') {
        return $value = ($value * 2.20462262).' lb' ;
    } else if ($unit === 'lb') {
        return $value = ($value / 2.20462262).' kg' ;
    }
    // return $unit === 'kg ? $value * 2.20462262) : $value / 2.20462262;
}


echo convert_weight(1, 'lb'); // 0.45359237 - converted 1 lb to kilograms

echo ("<br>");
echo convert_weight(1, 'kg'); // 2.20462262 - converted 1 kg to lbs
echo ("<br>");
echo convert_weight(1);       // 2.20462262 - used default unit kg, converted 1 kg to lbs
echo ("<br>");

?>