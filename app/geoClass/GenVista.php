<?php

namespace App\geoClass;

use App\geoClass\GestioneFile as G;
use App\geoClass\Costanti as C;
use App\geoClass\components\Input as i;
use App\geoClass\components\Row as r;
use App\geoClass\components\Panel as p;
use App\geoClass\components\Tabella as t;
class GenVista {


//const  pControllerPhp="../app/Http/Controllers";//percorso controlleres php

   public  static function creaStruttura($obj) {

    $nomeSezione=$obj["nomeTabella"];
           $text="
@extends('app')
@section('title','| generatore')
@section('content')
<script src=\" <% asset('app/controllers/gen/". $nomeSezione."/". $nomeSezione. "Controllers.js')%>\" type='text/javascript'></script>
    <div id=\"contenitore\" class=\"container\" ng-controller=\"". $nomeSezione."Controllers\" style=\"margin-top:20px\">
   
        <div ng-view=\"message\" class=\"alert alert-success\" role=\"alert\">
            <strong>Success:</strong>{{message}}
        </div>

        ".
            r::c(
                p::c(
                   t::c($obj)
                    )
                   
                )   
        ."

    </div>
@endsection
";
                    



   G::scriviSuFile(C::pViewBlade().'/'.$nomeSezione.'/'.$nomeSezione.'.Blade.php', $text);

        return $nomeSezione;
    }

  
    

}
