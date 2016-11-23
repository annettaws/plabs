<?php

namespace App\geoClass\components;


use App\geoClass\GestioneFile as G;
use App\geoClass\Costanti as C;
class GenVista {


//const  pControllerPhp="../app/Http/Controllers";//percorso controlleres php

   public  function creaStruttura($nomeSezione) {
       
           $text="
@extends('app')
@section('title','| generatore')
@section('content')
<script src=\" <% asset('app/controllers/". $nomeSezione."/". $nomeSezione. "Controllers.js')%>\" type='text/javascript'></script>
<div id=\"contenitore\" class=\"container\" ng-controller=\"". $nomeSezione."Controllers\" style=\"margin-top:20px\">
     <div ng-view=\"message\" class=\"alert alert-success\" role=\"alert\">
        <strong>Success:</strong>{{message}}
    </div>

</div>
@endsection
";
                    

         G::scriviSuFile(C::pViewBlade().'/'.$nomeSezione.'/'.$nomeSezione.'.Blade.php', $text);

        return $nomeSezione;
    }
    

}
