<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(MBudgetSeeder::class);
        $this->call(MFacilityTypeSeeder::class);
        $this->call(MPrefectureSeeder::class);
        $this->call(MScaleSeeder::class);
        $this->call(MServiceSeeder::class);
    }
}
