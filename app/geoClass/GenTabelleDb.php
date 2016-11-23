<?php

namespace App\geoClass;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class GenTabelleDb {


    



    public static function creaStruttura($obj) {

  $text=' Schema::create(\''.$obj["nomeTabella"].'\', function (Blueprint $table) {
        ';
       if(!$obj["campiTabella"]==""){

             for ($i=0;$i<count($obj["campiTabella"]); $i++){
                $c=$obj["campiTabella"];


                    if(!$c[$i]["ai"]=="" && $c[$i]["ai"]=="1" ){
                  $text=  $text . '$table->increments(\'' . $c[$i]["nome"] .'\' );
                ';
                    };


            if(!$c[$i]["tipo"]=="" && $c[$i]["tipo"]=="VARCHAR" ){
                  $text=  $text . '$table->string(\'' . $c[$i]["nome"] .'\' );
                ';
                    };

           if(!$c[$i]["tipo"]=="" && $c[$i]["tipo"]=="DATE" ){
                  $text=  $text . '$table->date(\'' . $c[$i]["nome"] .'\' );
                ';
                    };
             

             };

        }; 


       $text=  $text .'

        $table->timestamps();
        });';

  




       return  $text;
   
    }


  


    }


