<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'facility_id', 'post_id', 'm_scale_id', 'm_budget_id',
    ];

    // belongsTo
    public function facility() {
        return $this->belongsTo('App\Models\Facility');
    }
    public function m_scale() {
        return $this->belongsTo('App\Models\MScale');
    }
    public function m_budget() {
        return $this->belongsTo('App\Models\MBudget');
    }
    public function post() {
        return $this->belongsTo('App\Models\Post');
    }
}
