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
            'detail' => '飲食の提供',
            'icon_url' => '/img/service/01.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => '酒類の提供',
            'icon_url' => '/img/service/02.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => '飲食の持込',
            'icon_url' => '/img/service/03.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => '持込ゲーム',
            'icon_url' => '/img/service/04.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボードゲーム',
            'icon_url' => '/img/service/05.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TCG',
            'icon_url' => '/img/service/06.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'TRPG',
            'icon_url' => '/img/service/07.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => '人狼',
            'icon_url' => '/img/service/08.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => '喫煙スペース',
            'icon_url' => '/img/service/09.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => '全席禁煙',
            'icon_url' => '/img/service/10.png'
        ]);
        DB::table('m_services')->insert([
            'detail' => 'ボドゲ販売',
            'icon_url' => '/img/service/11.png'
        ]);
    }
}
