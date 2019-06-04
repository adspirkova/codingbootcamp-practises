<?php

namespace Week6_Tue;

class BondCase
{
    protected $name = null;
    protected $year = null;
    protected $enemy = null;
    protected $girls = [];
    
    public function __construct($year)
    {
        $this -> year = $year;
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
    }

}

?>