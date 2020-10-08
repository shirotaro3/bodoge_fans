<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MBudget extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'detail',
    ];

    public function facilities() {
        return $this->hasMany('App\Models\Facility');
    }
    public function events() {
        return $this->hasMany('App\Models\Event');
    }
}
