<?php

// Declare a PHP function headline that would accept one argument $text and it would print out a <h1> headline with the text as it's content.

// For example calling headline('My website') should yield <h1>My website</h1>

function headline ($text)
{
    echo "<h1>{$text}</h1>";
}

headline('My website');

function headline2 ($text)
{
    return "<h1>".$text."</h1>";
}
echo headline2('My website');



// Declare a variable $inches and initialize it with the value 12.

// Write a function inchesToCentimeters that would accept one argument:

// number of inches
// Inside the function convert the number of inches to centimeters and return the result.

// The equation is cm = in * 2.54

// Call the function using the variable $inches as argument.

$inches = 12;

function inchesToCentimeters ($inches)
{
    return $inches * 2.54;
}

echo inchesToCentimeters($inches);


// Declare a variable $celsius and initialize it with the value 100

// Write a function celsiusToFahrenheit that would accept one argument:

// temperature in celsius
// Inside the functiion convert the temperature from Celsius to Fahrenheit and return the result.

// The equation is F = (9/5) * C + 32

// Call the function using the variable $celsius as argument.

echo ("<br>");

$celsius = 100;

function celsiusToFahrenheit($celsius)
{
    return (9/5) * $celsius + 32;
}

echo celsiusToFahrenheit($celsius);


// Declare a variable $temperature and initialize it's value to 36.5

// Write a function isHealthy that would accept two arguments:

// temperature in celsius OR fahrenheit
// the string 'c' or 'f' denoting the units for the first argument
// Inside the function write a condition that would convert the first argument from Fahrenheit to Celsius if the second argument is 'f'

// Then it would check the resulting temperature in Celsius against number 37 and return either true if the temperature is lower or false otherwise.

// Call the function using the variable $temperature as argument.
echo ("<br>");

$temperature = 36.5;

function isHealthy ($temperature, $unit) 
{
    if ($unit == "f") {
    $x = ($temperature - 32) / (9/5);

    } /* if ($unit == "c") {
    $x = $temperature;
    } */
    /* return $x < 37; */
    if ($x < 37) {
        return true;
    } else {
        return false;
    }
}

var_dump(isHealthy($temperature, 'f'));



// Declare a variable $number and initalize it's value to 42

// Write a function evenOrOdd that would accept one argument:

// a number
// Inside the function check whether the number is even or odd and return either the string 'even' or the string 'odd'.

// The code inside the function will be just 1 line and it is mandatory to use the ternary operator.

// Call the function using the variable $number as argument.
echo ("<br>");


$number = 42;
function evenOrOdd ($number)
{
    return $number%2 ==0 ? 'even' : 'odd';
    /* return $number%2 ? 'even' : 'odd'; */
}
echo evenOrOdd($number);


// Create a variable $weekday and initialize it with the name of today ('Monday', 'Tuesday', etc.)

// Write a function sayWeekday that will accept one argument:

// name of a day
// The function will echo a sentence that would say for example 'Today is Monday' using the argument and concatenation.

// Call the function using the variable $weekday as argument.


echo ("<br>");
$weekday = date('D');

function sayWeekday ($weekday)
{
    echo ('Today is '.$weekday);
}


sayWeekday($weekday);



// Concatenation #2
// Create a variable $year_of_birth and initialize it with the year you were born.

// Write a function sayBirthday that will accept one argument:

// the year of birth.
// Inside the function declare another variable $this_year and initialize it with the current year (hardcode it or use date('Y')).

// Then the function will echo a sentence that would say for example 'I was born in 1990 so this year I am celebrating my 29. birthday', calculating the number by subtracting the two years.

// Call the function using the variable $year_of_birth as argument.

echo ("<br>");

$year_of_birth = 1994;

function sayBirthday($year_of_birth)
{
    $this_year = date('Y');
    echo ('I was born in '.$year_of_birth.' so this year I am celebrating my '.($this_year-$year_of_birth).' birthday.');
}

sayBirthday($year_of_birth);

// Write a function assessHeight that will accept one argument:

// height in centimeters.
// Inside the function write a condition that would return the word 'tall' if a person's height (in a variable) is 180 or more, 'average' when its less than 180 but at least 160 and 'small' if it's under 160.

// Call the function using your own height as argument.

echo ("<br>");

function assessHeight($heightincm)
{
    if ($heightincm >= 180) {
        return 'tall';
    } else if ($heightincm >= 160){
        return 'average';
    } else {
        return 'small';
    }
}

echo assessHeight(168);


// Switch
// Write a function getLanguageUsage that will accept one argument:

// a string with a lowercase name of a programming language
// Inside the function use the switch control structure on the argument to do one of the following things:

// return the string 'serverside' if the value is 'php', 'python' or 'ruby'
// return the string 'clientside' if the value is 'javascript'
// return the string 'i don\'t know' for anything else
// Call the function using some of these values:  'php', 'python', 'ruby', 'javascript', 'node'.

echo ("<br>");

function getLanguageUsage($programlng)
{
    switch (strtolower($programlng)){
        case 'php':
        case 'python':
        case 'ruby':
            return 'serverside';
            break;
        case 'javascript':
            return 'clientside';
            break;
        default:
            return 'i don\'t know';
            break;

    }
}
echo getLanguageUsage('php')."<br>";
echo getLanguageUsage('python')."<br>";
echo getLanguageUsage('ruby')."<br>";
echo getLanguageUsage('javascript')."<br>";
echo getLanguageUsage('node')."<br>";


echo ("<br>");
// Research the PHP function strtolower and strtoupper.

echo getLanguageUsage('PHP');
echo ("<br>");
echo getLanguageUsage('php');
echo ("<br>");
echo getLanguageUsage('Php');
echo ("<br>");
echo getLanguageUsage('javascript');
echo ("<br>");
echo getLanguageUsage('JavaScript');


echo ("<br>");
// Logical operators

$age;
$gender; 
$employed;


// if the age is less than 25


if ($age<25)
{
    return 'Young';
}

echo ("<br>");
// if employed


if ($employed) {

}
echo ("<br>");
// if age is above 34 and not employed

if ($age >34 && !$employed) 
{

}
echo ("<br>");
// if the age is not greater than 18
if ($age<=18)
{
    return 'Young';
}

echo ("<br>");
// if the age is lower than 12 and gender is female
echo ("<br>");

if ($age < 12 && $gender == 'female')
{

}

// if age is greater or equal to 18 and is not employed 
echo ("<br>");

if ($age >= 18  && !$employed)
{

}
// if age is greater or equal to 60, is employed and is a female
echo ("<br>");


if ($age >= 60 && !$employed && $gender == 'female' )
{

}
// if (someone) is a male above 20 or is an unemployed female above 25
echo ("<br>");

if ($age > 20 && $gender == 'male' ||  $age > 25 && $gender == 'female' && !$employed)
{

}
?>



