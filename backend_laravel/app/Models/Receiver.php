<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Receiver extends Model
{
  protected $fillable = [
    'user_id',
    'name',
    'phone',
    'city',
    'district',
    'commune',
    'type',
    'dsc',
  ];
  public $timestamps  = false;
  public function user()
  {
    return $this->belongsTo(User::class);
  }
}
