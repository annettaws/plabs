<?php

namespace App\model\localita;

use Illuminate\Database\Eloquent\Model;

class Provincia extends Model {

    protected $table = 'province';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'siglaRegione',
        'nome',
        'sigla',
    ];

    public function lista_Tutti() {
        return $this->all();
    }

    public function lista($paginate) {
        return \DB::table('province')->simplePaginate($paginate);
    }

    public function listaRegione($regione) {
        return \DB::table('province')->where('siglaRegione', $regione)->get();
    }

    public function regione() {
        return $this->belongsTo('\App\model\localita\Regione', 'siglaRegione');
    }

}
