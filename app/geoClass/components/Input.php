<?php

namespace App\geoClass\components;



class Input {




   public static function c($ngModel) {
       
     $text="
		<input type=\"text\" ng-model=\"".$ngModel."\">
		{{".$ngModel."}}
		";
                    

       

        return $text;
    }
    

}
