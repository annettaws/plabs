<?php
            namespace App\model\gen\Clienti;
            use Illuminate\Database\Eloquent\Model;
            class Clienti extends Model {
            
          protected $table = 'Clienti';

               /**
                   * The attributes that are mass assignable.
                   *
                   * @var array
                   */
                  protected $fillable = ['Nome','Cognome','gruppo_id', ];

              public function lista_Tutti() {
                  return $this->all();
              }

                public function gruppo()
                {
                   $a=  $this->belongsTo('App\model\gen\Gruppi\Gruppi','gruppo_id','ID');
                   //consol.log($a);
                  // var_dump($a);
                   return $a;

                }

            }