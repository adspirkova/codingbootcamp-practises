<?php


class Square
{
    protected $x_coord = null;
    protected $y_coord = null;
    protected $piece = null;

    public function __construct($x_coord, $y_coord, $piece = null)
    {
        $this -> x_coord = $x_coord;
        $this -> y_coord = $y_coord;
        $this -> piece = $piece;
    }

    protected function isDark()
    {
        if (($this -> x_coord + $this -> y_coord) %2 == 0) {
            return 'light'; 
        } else {
            return 'dark';
        }
    }

    public function __toString()
    {
        return '<div class="'.$this -> isDark().'">'.$this->piece.'</div>'; // enhance this
    }
}
//$squarik = new Square(1,0);

//var_dump($squarik -> __toString());
?>