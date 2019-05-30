<?php


if (false || true || false ) {

}


if (true && false && true ) {

}



function user_is_administrator ()
{
    // complex database operations to determin user role
    // 0.5s
}

if ($current_page == 'administration' AND user_is_administrator()) { // user_is_administrator() will not be run here
 
}