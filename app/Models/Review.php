<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'facility_id', 'title', 'body',
    ];

    public function facility()
    {
        return $this->belongsTo('App\Models\Facility');
    }

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
