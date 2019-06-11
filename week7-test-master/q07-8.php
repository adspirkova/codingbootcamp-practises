<?php

// class declaration here


class Address 
{
    public $name = null;
    public $street = null;
    public $house_nr = null;
    public $city = null;
    public $country = null;
    public $postal_code = null;

    protected static $local_country = null;

    public static function setLocalCountry($countryinp)
    {
        static::$local_country = $countryinp;
        $country = static::$local_country;
        return $country;
    }

    public function isLocal()
    {
        if ($this -> country === static::$local_country){
        return true;
        } else {
            return false;
        }
    }

}


Address::setLocalCountry('czechia');

$czechia = new Address();
$czechia->country = 'czechia';

var_dump($czechia->isLocal()); // true

$germany = new Address();
$germany->country = 'germany';

var_dump($germany->isLocal()); // false, because 'czechia' is the local country

