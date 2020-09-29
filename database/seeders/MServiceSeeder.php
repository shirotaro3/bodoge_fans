<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('m_services')->insert([
            'detail' => '飲食の提供あり',
        ]);
        DB::table('m_services')->insert([
            'detail' => '酒類の提供あり',
        ]);
        DB::table('m_services')->insert([
            'detail' => '飲食の持ち込みOK',
        ]);
        DB::table('m_services')->insert([
            'detail' => '持ち込みゲーム',
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボードゲーム',
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TCG',
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TRPG',
        ]);
        DB::table('m_services')->insert([
            'detail' => '人狼',
        ]);
        DB::table('m_services')->insert([
            'detail' => '喫煙スペースあり',
        ]);
        DB::table('m_services')->insert([
            'detail' => '全席禁煙',
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボドゲ販売あり',
        ]);
    }
}
