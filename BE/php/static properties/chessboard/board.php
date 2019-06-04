<?php

class Board
{

    public $board = [];
    public $square = [];
    public $piece = [];

    public function __construct($board)
    {
        $this -> board = $board;
    }
    
    public function __toString()
    {
        return '<div class="board"></div>'; // enhance this
    }
}

//.$this -> square.$this -> piece. 
?>