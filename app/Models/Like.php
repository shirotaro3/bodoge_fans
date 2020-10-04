<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'post_id', 'facility_id', 'user_id',
    ];

    public function post() {
        return $this->belongsTo('App\Models\Post');
    }
    public function facility() {
        return $this->belongsTo('App\Models\Facility');
    }
    public function user() {
        return $this->belongsTo('App\Models\User');
    }
}
