<?php

namespace App\model\localita;

use Illuminate\Database\Eloquent\Model;

class Comune extends Model {

    protected $table = 'comuni';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'istat',
        'nomeComune',
        'provincia',
        'regione',
        'prefisso',
        'cap',
        'codFisco',
        'abitanti',
        'link',
    ];

    public function lista_Tutti() {
        return $this->all();
    }

    public function lista_paginate($paginate) {
        return \DB::table('comuni')->simplePaginate($paginate);
    }

    public function listaRegione($regione) {
        return \App\model\localita\Comune::where('regione', $regione);
    }

    public function listaDaProvincia($provincia) {
        return \DB::table('comuni')->where('provincia', $provincia)->get();
    }

    public function provincia() {
        return $this->belongsTo('\App\model\localita\Provincia', 'provincia');
    }

    public function regione() {
        return $this->belongsTo('\App\model\localita\Regione', 'regione');
    }

}
