<?php

namespace App\geoClass;

use App\geoClass\GestioneFile as G;
use App\geoClass\Costanti as C;
use App\geoClass\componentsJS\TxtJS as T;

class GenControllerJS {





    public static function creaStruttura($nomeSezione) {
       
           $text="
  bApp.controller('". $nomeSezione ."Controllers',function (
        \$scope,
        \$http,
        \$modal,
        \$aside)
        {

        \$scope.publicUrl=pubicUrl;    
        \$scope.url=baseUrl;
        \$scope.nomeController='". $nomeSezione."';
        \$scope.message=\$scope.nomeController;
      
   \$http.get(\$scope.url+'/current_user') 
            .success(function(data) { 
                \$scope.users = data; 
            }) 
            .error(function() { 
                alert('un errore!'); 
            }); 
        


      \$http.get(\$scope.url+ '/"  . $nomeSezione. "/lista').success(function (result){
            \$scope.lista=result;
          
            });

        var myAside = \$aside({scope: \$scope, templateUrl: \$scope.publicUrl + '/page/gen/" . $nomeSezione ."/asideAdd.tpl.html',show: false} );
 
        \$scope.create = function() {
          \$scope.creaOaggirna=true;
          \$scope."  . $nomeSezione. "='';
         myAside.show();
        };

           \$scope.salva = function(obj) {
           var string_=JSON.stringify(obj);
  \$http.get(\$scope.url+'/"  . $nomeSezione. "/salva/' + string_).then(function (res){
            \$scope.message=res.data;
    \$http.get(\$scope.url+ '/"  . $nomeSezione. "/lista').success(function (result){
            \$scope.lista=result;
           myAside.hide();
            });

               });
   


        };


" . T::SelezionaID($nomeSezione) . 
    T::Seleziona($nomeSezione) .
   T::Aggiorna($nomeSezione) .
 T::destroy($nomeSezione) .
"

        });//Fine  toDoController

          ";
                    

         G::scriviSuFile(C::pControllerJs().'/'.$nomeSezione.'/'.$nomeSezione.'Controllers.js', $text);

        return $nomeSezione;
    }
    

}
