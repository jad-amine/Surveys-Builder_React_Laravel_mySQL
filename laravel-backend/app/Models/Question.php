<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    // Get relevant answers
    public function answers(){
        return $this->hasMany(Answer::class);
    }

    // Get relevant choices
    public function choices(){
        return $this->hasMany(Choice::class);
    }

}
