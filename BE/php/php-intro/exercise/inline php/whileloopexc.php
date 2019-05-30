<?php
set_time_limit(1); 

$time_served = 0;
while ($time_served <10) {
    $time_served++;
    echo "The prisoner has served {$time_served} years"."<br>";
} 

// question 2

$time_served = 0;
do {
    $time_served++;
    echo "The prisoner has served {$time_served} years"."<br>";
} while ($time_served <10);
echo ('<br>');


// question 3

for ($i = 0; $i < 6; $i++) {
    $years = 5 - $i;
    echo "The prisoner has {$years} more years to serve"."<br>";
}

echo ('<br>');

// question 4

for ($i = 10; $i > 0; $i--) {
    echo "The prisoner has {$i} more years to serve"."<br>";
    if ($i > 5) {
        continue;
    } echo "Going to a parole hearing..."."<br>";
     if ($i == 2) {
        echo "Paroled!"."<br>";
        break;
    }
}

echo ('<br>');


?>