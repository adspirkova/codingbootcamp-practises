<?php

use App\User;

use Illuminate\Database\Seeder;



class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $u = new User();
        $u -> name ='Admin';
        $u -> email = 'admin@admin.com';
        $u -> password = bcrypt('secret');
        $u -> save();
    }
}
