<?php 
namespace App\model\biblios;

use Illuminate\Database\Eloquent\Model;

class Book extends Model {

 protected $fillable = ['title', 'author_id'];


public function author()
{
    return $this->belongsTo('App\model\biblios\Author');
}
public function users()
{
    return $this->hasMany('App\model\biblios\User')->withTimestamps();
}
 
}
