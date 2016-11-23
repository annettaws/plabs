<?php

namespace App\geoClass\components;

class Panel {



   public static function c($includi) {
       
           $text="
					<div class=\"col-md-12 \">
			            <div class=\"panel panel-default\">
			                <div class=\"panel-heading panelHead\"> {{nomeController}} 


			                    <button class=\"btn btn-primary  pull-right btnPanelHead\" ng-click=\"listaTodo()\" bs-tooltip=\"tooltip\">
			                        <span class=\"glyphicon glyphicon-refresh \" aria-hidden=\"true\"></span>
			                    </button>
			                    <button class=\"btn btn-primary  pull-right btnPanelHead\" ng-click=\"create()\">
			                        <span class=\"glyphicon glyphicon-plus \" aria-hidden=\"true\"></span>
			                    </button>
			                    <button class=\"btn btn-primary  pull-right btnPanelHead\" ng-click=\"listaAutori()\">
			                        <span class=\"glyphicon glyphicon-heart \" aria-hidden=\"true\"></span>
			                    </button>

			                </div>



			 				 <div class=\"panel-body\">
			 				" . $includi . "
			            	</div>

			       		</div>
			  		</div>

				";
                    

       
        return   $text;
    }
    

}
