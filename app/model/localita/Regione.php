<?php

namespace App\model\localita;

use Illuminate\Database\Eloquent\Model;

class Regione extends Model {
      protected $table = 'regioni';
    protected $guarded = [];


    
   public function lista_Tutti() {
        return $this->all();
    }


}
