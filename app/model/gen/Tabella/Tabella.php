<?php
            namespace App\model\gen\Tabella;
            use Illuminate\Database\Eloquent\Model;
            class Tabella extends Model {
            
          protected $table = 'tabella';

      
                  protected $fillable = ['nome','idchiaesterna' ];




    public function campos()
    {


        return $this->hasMany('App\model\gen\Campo\Campo');
    }   


            }