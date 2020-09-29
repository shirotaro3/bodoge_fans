<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MFacilityTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('m_facility_types')->insert([
            'detail' => 'カフェ',
        ]);
        DB::table('m_facility_types')->insert([
            'detail' => 'バー・居酒屋',
        ]);
        DB::table('m_facility_types')->insert([
            'detail' => 'レストラン',
        ]);
        DB::table('m_facility_types')->insert([
            'detail' => 'イベントホール',
        ]);
        DB::table('m_facility_types')->insert([
            'detail' => 'ショップ',
        ]);
        DB::table('m_facility_types')->insert([
            'detail' => '休憩スペース',
        ]);
    }
}
