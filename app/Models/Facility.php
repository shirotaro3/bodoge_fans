<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Facility extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'm_facility_type_id', 'm_budget_id', 'm_scale_id', 'name', 'description',
        'introduction', 'm_prefecture_id', 'address', 'building',
        'hp_url', 'facebook', 'twitter', 'line', 'instagram', 'phone_number', 'header_image_path',
    ];

    protected $appends = ['header_image_url'];

    // hasOne
    public function facility_time()
    {
        return $this->hasOne('App\Models\FacilityTime');
    }

    // belongsTo
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function m_budget()
    {
        return $this->belongsTo('App\Models\MBudget');
    }

    public function m_scale()
    {
        return $this->belongsTo('App\Models\MScale');
    }

    public function m_facility_type()
    {
        return $this->belongsTo('App\Models\MFacilityType');
    }

    public function m_prefecture()
    {
        return $this->belongsTo('App\Models\MPrefecture');
    }

    // belongsToMany
    public function m_services()
    {
        return $this->belongsToMany('App\Models\MService');
    }

    // hasMany
    public function likes()
    {
        return $this->hasMany('App\Models\Like');
    }

    public function reviews()
    {
        return $this->hasMany('App\Models\Review');
    }

    public function events()
    {
        return $this->hasMany('App\Models\Event');
    }

    // アクセサ
    public function getHeaderImageUrlAttribute()
    {
        // pathがあればURLに変換する
        return $this->header_image_path ? Storage::disk('s3')->url($this->header_image_path) : '';
    }
}
