<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name', 'email', 'password', 'birthday', 'sex', 'icon_path'
    ];

    protected $hidden = [
        'password', 'remember_token', 'birthday', 'sex', 'email',
        'created_at', 'updated_at', 'email_verified_at'
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = ['icon_url'];

    public function facilities() {
        return $this->hasMany('App\Models\Facility');
    }
    public function likes() {
        return $this->hasMany('App\Models\Like');
    }
    public function reviews() {
        return $this->hasMany('App\Models\Review');
    }

    // アクセサ
    public function getIconUrlAttribute()
    {
        // pathがあればURLに変換する
        return $this->icon_path ? Storage::disk('s3')->url($this->icon_path) : '';
    }
}
