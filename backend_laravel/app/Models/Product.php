<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
  protected $fillable = [
    'name',
    'description',
    'price',
    'image',
    'category_id',
    'supplier_id',
    'quantity'
  ];

  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  public function supplier()
  {
    return $this->belongsTo(Supplier::class);
  }

  public function carts()
  {
    return $this->hasMany(Cart::class);
  }
}
