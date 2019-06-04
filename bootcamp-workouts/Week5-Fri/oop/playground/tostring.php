<?php


class Address
{
   public $street = null;
   public $house_nr = null;

   public function __toString()
   {
       var_dump($this -> street." ".$this -> house_nr);
   }
}


$here = new Address;

$here -> street = 'Krakovská';
$here -> house_nr = 9;


$here -> __toString();

var_dump($here);

?>