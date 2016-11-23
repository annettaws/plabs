<?php

namespace App\geoClass;

use App\geoClass\GestioneFile as G;
use App\geoClass\Costanti as C;
use App\geoClass\GenTabelleDb as database;
use App\geoClass\componentsPhp\TxtPhp as T;
class GenControllerPhp {



//const  pControllerPhp="../app/Http/Controllers";//percorso controlleres php



    

        public static function creaStruttura($obj) {
       $nomeSezione=$obj["nomeTabella"];
           $text=T::I($nomeSezione) //intestazione
            .T::C($nomeSezione,     //apri classe
                T::V($nomeSezione) .  //rederizza vista
                T::LT($nomeSezione) .  //crauna lista ordinat iD
              T::Salva($obj). //Salva su db
                T::db($obj).//crea  db
               T::Destroy($obj).//cancella su db
               T::seleziona($obj)
               .T::agiorna($obj)//seleziona by id
                )
           ;

              

      
                    

         G::scriviSuFile(C::pControllerPhp().'/'.$nomeSezione.'/'.$nomeSezione.'Controller.php', $text);

        return  $text ;
    }

}
