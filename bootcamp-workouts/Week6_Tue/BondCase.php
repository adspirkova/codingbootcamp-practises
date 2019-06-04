<?php

namespace Week6_Tue;

class BondCase
{
    protected static $cases_solved = 0;
    protected static $girls_met = 0;
    protected $name = null;
    protected $year = null;
    protected $enemy = null;
    protected $girls = [];

    public static function getAvgGirlsPerCase()
    {
        return static::$girls_met/static::$cases_solved;
    }

    public function __construct($year)
    {
        $this -> year = $year;
        static::$cases_solved++;
    }

    public function getName()
    {
        return $this -> name;
    }
    public function getYear()
    {
        return $this -> year;
    }
    public function getEnemy()
    {
        return $this -> enemy;
    }
    public function setName($name)
    {
        $this -> name = $name;
    }
    public function setYear($year)
    {
        $this -> year = $year;
    }
    public function setEnemy($enemy)
    {
        $this -> enemy = $enemy;
    }

    public function addGirl($name)
    {
        $this -> girls[] = $name;
        static::$girls_met++;
    }


}

?>