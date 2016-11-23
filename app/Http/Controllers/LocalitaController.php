<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\model\localita\Comune as C;
use App\model\localita\Regione as R;
use App\model\localita\Provincia as P;
use App\model\localita\Localita as L;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Model;
class LocalitaController extends Controller {

    public function __construct() {
        $this->middleware('auth');
    }

    /**

     *

     * @return Resonse
     */
    public function Index() {

     
        //  $listaComuni = $r->take(5)->get();
      //  $lista = \DB::table('localitas')->with('comune')->get();

    $lista = L::where('localizzazione_type','cliente')
                ->join('cliente', 'cliente.id', '=', 'localizzazione_id')
                ->with('comune','provincia','regione')
                ->get();
 
        return $lista;
    }

    public function Pippo() {
        var_dump('pippo');
    }

    /**
     *
     * @return Resonse
     */
    public function Show1() {
        var_dump('show');
    }

    public function Show() {
        var_dump('index');
        $r = new C();
        $listaAutori = $r->lista_paginate(1);
        // $listaAutori = Autori::where('nome', 'like', '%cel%')->get();
        $i = 1;
        foreach ($listaAutori as $la) {
            echo $la->id . ' ' . $la->nomeComune . ' ' . $la->istat . '<br>';
            $i++;
        }
    }

    public function Regioni() {

        $o = new R();
        $lo = $o->lista_Tutti();
        return $lo;
    }

    public function Scegliregione($K) {
        $data['regioni'] = R::where('siglaRegione', $K)->firstOrFail();
        //var_dump($data);
        return $data;
    }

    public function Province($K) {
        $p = new P();

        return $p->listaRegione($K);
    }

    public function Comuni($K) {
        $c = new C();

        return $c->listaDaProvincia($K);
    }


    public function AddNew1(Request $request) {

       $L = new L();
        return $L ;
    }

    public function AddNew(Request $request) {

        $L = new L();
        $L->via = $request->input('via');
        $L->civico = $request->input('civico');
        $L->note = $request->input('note');
        $L->comune_id = $request->input('comune_id');
        $L->provincia_id = $request->input('provincia_id');
        $L->regione_id = $request->input('regione_id');
        $L->localizzazione_id = $request->input('localizzazione_id');
        $L->localizzazione_type = $request->input('localizzazione_type');
        $L->coordinataX = $request->input('coordinataX');
        $L->coordinataY = $request->input('coordinataY');    
        $L->save();
        return $L ;
    }
}
