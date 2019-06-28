<?php

use Illuminate\Database\Seeder;

use App\Reservation ;
use App\Book;
use App\User;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for($i = 0; $i < 1000; $i++){
        $r = new Reservation();
        $r->book_id = rand(1,Book::orderBy(`id`, 'desc')->first()->id);
        $r->user_id = rand(1,User::orderBy(`id`, 'desc')->first()->id);
        $r->from = '2019-05-01';
        $r->to = '2019-06-01';
        $r->save();
        }
    }
}
