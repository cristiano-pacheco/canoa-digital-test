<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    protected $fillable = [
        'vehicle',
        'brand',
        'year',
        'description',
        'sold',
    ];
}
