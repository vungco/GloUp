<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
  protected $fillable = [
    'name',
    'email',
    'phone',
    'address',
  ];
  public $timestamps  = false;
  public function products()
  {
    return $this->hasMany(Product::class);
  }
}
