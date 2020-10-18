<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Story extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'facility_id', 'post_id',
    ];

    public function post() {
        return $this->belongsTo('App\Models\Post');
    }
    public function facility() {
        return $this->belongsTo('App\Models\Facility');
    }
}
