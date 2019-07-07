<?php

var_dump( pathinfo( __FILE__ , PATHINFO_EXTENSION) );
 
var_dump(  __DIR__  );

var_dump( basename( __FILE__ ) );
var_dump( dirname( __FILE__ ) );


var_dump(scandir(__DIR__));


var_dump(readdir(opendir(__DIR__)));

// while (false !== ($file = readdir(opendir(__DIR__)))){
//     var_dump($file);
// }



var_dump(file_put_contents('test.txt', 'hello world'));


function browse_directory($directory)
{
    $files = scandir($directory);
    foreach($files as $file) {
        if($file == '.' || $file == '..') continue;
        if(is_dir($directory.'/'.$file)) {
            // using recursiveness to go deeper
            browse_directory($directory.'/'.$file);
        } else {
            // do something with the file
        }
    }
}

var_dump(browse_directory(__DIR__));