<?php

$days_to_christmas = 200;

set_time_limit(1);

while ($days_to_christmas > 0) {
    $days_to_christmas--;

    echo "There are still {$days_to_christmas} to christmas";
}

do {
    $days_to_christmas--;
    echo "There are still {$days_to_christmas} to christmas";
} while ($days_to_christmas >0);

echo ('<br>');


// Raising by 1
for ($i = 0; $i < 10; $i++) {
    echo "This is {$i}";
}

echo ('<br>');



// Raising by 2
for ($i = 0; $i < 10; $i++) {
    echo "This is ".($i++);
}

echo ('<br>');
// Stopping iteration
for ($i = 0; $i < 10; $i++) {
    if ($i >5) {
        break;
    }
    echo "This is ".($i++);
}

echo ('<br>');


for ($i = 0; $i < 10; $i++) {
    for ($j = 0; $j < 10; $j++) {
    echo "This is ".($i++).($j);
    }
    if ($j == 5) {
    break;
    }
}