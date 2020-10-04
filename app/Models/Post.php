<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'body',
    ];
    
    // hasOne
    public function event() {
        return $this->hasOne('App\Models\Event');
    }
    public function story() {
        return $this->hasOne('App\Models\Story');
    }
    
    // hasMany
    public function likes() {
        return $this->hasMany('App\Models\Like');
    }
}
