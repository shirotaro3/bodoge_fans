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
            'icon_url' => '/img/service/01.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '酒類の提供あり',
            'icon_url' => '/img/service/02.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '飲食の持ち込みOK',
            'icon_url' => '/img/service/03.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '持ち込みゲーム',
            'icon_url' => '/img/service/04.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボードゲーム',
            'icon_url' => '/img/service/05.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TCG',
            'icon_url' => '/img/service/06.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TRPG',
            'icon_url' => '/img/service/07.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '人狼',
            'icon_url' => '/img/service/08.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '喫煙スペースあり',
            'icon_url' => '/img/service/09.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => '全席禁煙',
            'icon_url' => '/img/service/10.jpg'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボドゲ販売あり',
            'icon_url' => '/img/service/11.jpg'
        ]);
    }
}
