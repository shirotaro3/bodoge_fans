<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FacilityTime extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'facility_id', 'mon_start', 'mon_end', 'tue_start', 'tue_end',
        'wed_start', 'wed_end', 'thu_start', 'thu_end', 'fri_start',
        'fri_end', 'sat_start', 'sat_end', 'sun_start', 'sun_end',
        'hol_start', 'hol_end', 'footnote',
    ];

    // belongsTo
    public function facility()
    {
        return $this->belongsTo('App\Models\Facility');
    }
}
