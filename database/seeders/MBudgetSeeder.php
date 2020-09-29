<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MBudgetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('m_budgets')->insert([
            'detail' => '10名以下',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '11〜20名程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '21〜30名程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '31〜40名程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '41〜50名程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '50名以上',
        ]);
    }
}
