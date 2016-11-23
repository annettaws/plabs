<?php
            namespace App\model\gen\Campo;
            use Illuminate\Database\Eloquent\Model;

  

            class Campo extends Model {
            
          protected $table = 'campo';

  
                  protected $fillable = ['n','nome','tipo','lunghezzaValori','nullo','indice','ai','IdTab' ];

                        public function tabellas()
                    {
                        return $this->belongsTo('App\model\gen\Tabella\Tabella','IdTab');
                                }


      

            }