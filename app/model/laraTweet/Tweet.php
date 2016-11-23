<?php namespace App\model\laraTweet;

use Illuminate\Database\Eloquent\Model;

class Tweet extends Model {
 use SoftDeletingTrait;
 protected $table = "Tweets";
    protected $fillable = [];
    protected $dates = ['deleted_at'];
}
