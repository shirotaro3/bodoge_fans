<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facility extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'm_facility_type_id', 'm_budget_id', 'm_scale_id', 'name', 'description', 'm_prefecture_id', 'address', 'building', 'postal_code'
    ];
}
