<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacilitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facilities', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->foreignId('m_facility_type_id')->constrained();
            $table->foreignId('m_budget_id')->constrained();
            $table->foreignId('m_scale_id')->constrained();
            $table->string('name', 100);
            $table->string('header_image_url')->nullable()->default('/img/boardgames.jpg');
            $table->text('description');
            $table->text('introduction')->nullable();
            $table->foreignId('m_prefecture_id')->constrained();
            $table->string('phone_number', 100)->nullable();
            $table->string('address', 100);
            $table->string('building', 100)->nullable();
            $table->string('hp_url', 100)->nullable();
            $table->string('facebook', 100)->nullable();
            $table->string('twitter', 100)->nullable();
            $table->string('line', 100)->nullable();
            $table->string('instagram', 100)->nullable();
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
        Schema::dropIfExists('facilities');
    }
}
