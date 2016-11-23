<?php 
namespace App\model\localita;
use Illuminate\Database\Eloquent\Model;

class Localita extends Model {



 protected $fillable = [
        'via',
        'civico',
        'note',
        'comune_id',
        'provincia_id',
        'regione_id',
        'localizzazione_id',
        'coordinataX',
        'coordinataY',
    ];


 public function localizzazione()
     {
        return $this->morphTo();
    }


    

   public function listaRegione($regione) {
        return \App\model\localita\Localita::where('regione_id', $regione);
    }
    

public function comune()
{
    return $this->belongsTo('App\model\localita\Comune');
}


public function provincia()
{
    return $this->belongsTo('App\model\localita\provincia');
}

public function regione()
{
    return $this->belongsTo('App\model\localita\Regione');
}


}
 