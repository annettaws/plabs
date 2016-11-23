<?php

namespace App\model\biblios;

use Illuminate\Database\Eloquent\Model;

class Author extends Model {

 protected $fillable = ['firstname', 'lastname'];


public function books()
{
    return $this->hasMany('App\model\biblios\Book');
}

}
