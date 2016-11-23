<?php

namespace App\geoClass\componentsJS;
use App\geoClass\Costanti as C;
use App\geoClass\GenTabelleDb as database;

class TxtJS {



//Intestazione

   public static function SelezionaID($nomeSezione) {

        return '
    $scope.selezionaId= function (obj){
            $http.get($scope.url+"/'. $nomeSezione.'/ogetto/"+obj.id).success(function (todo){
               modalUpdate.$promise.then(modalUpdate.show);
            $scope.message=todo;     
            $scope.'. $nomeSezione.'=todo;    
            }); 
           };


            ';
    }


       public static function Seleziona($nomeSezione) {

        return '
        $scope.seleziona= function (obj){
             $scope.creaOaggirna=false;
               myAside.show();
    
            $scope.'. $nomeSezione.'=obj;
        };


            ';
    }




public static function Aggiorna($nomeSezione) {

        return '
   
         $scope.aggiorna= function (obj){
            var string_=JSON.stringify(obj);
             $http.get($scope.url+"/'. $nomeSezione .'/aggiorna/"+string_).success(function (todoA){
                $scope.message="aggiornato";
             
          myAside.hide();
             
                });
          
        };


            ';
    }


public static function destroy($nomeSezione) {

        return '
   
         $scope.destroy = function (obj){
            var string_=JSON.stringify(obj);
             $http.get($scope.url+"/'. $nomeSezione .'/destroy/" + string_).success(function (mes){
                $scope.message=mes;
                    var index = $scope.lista.indexOf(obj);
               $scope.lista.splice(index, 1);
          myAside.hide();
             
                });
          
        };


            ';
    }


}
