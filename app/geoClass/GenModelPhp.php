<?php

namespace App\geoClass;

use App\geoClass\GestioneFile as G;
use App\geoClass\Costanti as C;
use App\geoClass\GenTabelleDb as db;
class GenModelPhp {



//const  pControllerPhp="../app/Http/Controllers";//percorso controlleres php


    public static function creaStruttura($obj) {
     $nomeSezione=$obj["nomeTabella"];

           $text='<?php
            namespace ' . C::pNameSpaceModel() .'\\' . $nomeSezione .';
            use Illuminate\Database\Eloquent\Model;
            class ' . $nomeSezione . ' extends Model {
            
          protected $table = \''. $nomeSezione .'\';

               /**
                   * The attributes that are mass assignable.
                   *
                   * @var array
                   */
                  protected $fillable = [';


        for ($i=1;$i<count($obj["campiTabella"]); $i++){
                $c=$obj["campiTabella"];
                $text= $text . "'" . $c[$i]["nome"] .  "',";
            };

        $text=$text. ' ];

              public function lista_Tutti() {
                  return $this->all();
              }



            }';
                    

         G::scriviSuFile(C::pModelPhp().'/'.$nomeSezione.'/'.$nomeSezione.'.php', $text);

        return $nomeSezione;
    }
    

}
