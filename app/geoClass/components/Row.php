<?php

namespace App\geoClass\components;


class Row {


//const  pControllerPhp="../app/Http/Controllers";//percorso controlleres php



   public  static function c($includi) {
       
      $text="
		<div class=\"row\">
		".$includi."
		</div>
	";
                    


        return $text;
    }
    

}
	