<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RequestLog extends Model
{
    //
    protected $fillable = [
        'method',
        'url',
        'ip',
        'user_id',
        'controller',
        'payload',
    ];
}
