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
            'iconUrl' => '/img/service/01.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '酒類の提供あり',
            'iconUrl' => '/img/service/02.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '飲食の持ち込みOK',
            'iconUrl' => '/img/service/03.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '持ち込みゲーム',
            'iconUrl' => '/img/service/04.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボードゲーム',
            'iconUrl' => '/img/service/05.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TCG',
            'iconUrl' => '/img/service/06.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TRPG',
            'iconUrl' => '/img/service/07.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '人狼',
            'iconUrl' => '/img/service/08.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '喫煙スペースあり',
            'iconUrl' => '/img/service/09.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '全席禁煙',
            'iconUrl' => '/img/service/10.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボドゲ販売あり',
            'iconUrl' => '/img/service/11.jpg'
        ]);
    }
}
