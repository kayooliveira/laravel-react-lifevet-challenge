<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Request extends Model
{
    use HasFactory;

    protected $fillable = [
        'label',
        'animal_id',
        'exams'
    ];

    protected $casts = [
        'exams' => 'array',
    ];

    protected $guarded = ['id'];

    public function animal(){
        return $this->belongsTo(Animal::class);
    }
}
