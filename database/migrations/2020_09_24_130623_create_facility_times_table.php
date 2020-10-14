<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilityTimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facility_times', function (Blueprint $table) {
            $table->id();
            $table->foreignId('facility_id')->unique()->constrained();
            $table->time('mon_start', 0)->nullable();
            $table->time('mon_end', 0)->nullable();
            $table->time('tue_start', 0)->nullable();
            $table->time('tue_end', 0)->nullable();
            $table->time('wed_start', 0)->nullable();
            $table->time('wed_end', 0)->nullable();
            $table->time('thu_start', 0)->nullable();
            $table->time('thu_end', 0)->nullable();
            $table->time('fri_start', 0)->nullable();
            $table->time('fri_end', 0)->nullable();
            $table->time('sat_start', 0)->nullable();
            $table->time('sat_end', 0)->nullable();
            $table->time('sun_start', 0)->nullable();
            $table->time('sun_end', 0)->nullable();
            $table->time('hol_start', 0)->nullable();
            $table->time('hol_end', 0)->nullable();
            $table->string('footnote', 100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facility_times');
    }
}
