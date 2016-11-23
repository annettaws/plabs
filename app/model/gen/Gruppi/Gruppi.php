<?php
            namespace App\model\gen\Gruppi;
            use Illuminate\Database\Eloquent\Model;
            class Gruppi extends Model {
            
          protected $table = 'Gruppi';

               /**
                   * The attributes that are mass assignable.
                   *
                   * @var array
                   */
                  protected $fillable = ['Nome','Descrizione', ];

              public function lista_Tutti() {
                  return $this->all();
              }

public function clienti()
{
    return $this->hasMany('App\model\gen\Clienti\Clienti', 'gruppo_id', 'ID');
}



            }