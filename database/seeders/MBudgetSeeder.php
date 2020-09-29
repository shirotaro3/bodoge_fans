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
            'detail' => '〜500円程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '〜1000円程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '〜2000円程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '〜3000円程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '〜5000円程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '〜10000円程度',
        ]);
        DB::table('m_budgets')->insert([
            'detail' => '10000円以上',
        ]);
    }
}
