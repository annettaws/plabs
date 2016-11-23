
  bApp.controller('CampoControllers',function (
        $scope,
        $http,
        $modal,
        $aside)
        {

        $scope.publicUrl=pubicUrl;    
        $scope.url=baseUrl;
        $scope.nomeController='Campo';
        $scope.message=$scope.nomeController;
      
   $http.get($scope.url+'/current_user') 
            .success(function(data) { 
                $scope.users = data; 
            }) 
            .error(function() { 
                alert('un errore!'); 
            }); 
        


      $http.get($scope.url+ '/Campo/lista').success(function (result){
            $scope.lista=result;
          
            });

        var myAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/gen/Campo/asideAdd.tpl.html',show: false} );
 
        $scope.create = function() {
          $scope.creaOaggirna=true;
          $scope.Campo='';
         myAside.show();
        };

           $scope.salva = function(obj) {
           var string_=JSON.stringify(obj);
  $http.get($scope.url+'/Campo/salva/' + string_).then(function (res){
            $scope.message=res.data;
    $http.get($scope.url+ '/Campo/lista').success(function (result){
            $scope.lista=result;
           myAside.hide();
            });

               });
   


        };



    $scope.selezionaId= function (obj){
            $http.get($scope.url+"/Campo/ogetto/"+obj.id).success(function (todo){
               modalUpdate.$promise.then(modalUpdate.show);
            $scope.message=todo;     
            $scope.Campo=todo;    
            }); 
           };


            
        $scope.seleziona= function (obj){
             $scope.creaOaggirna=false;
               myAside.show();
    
            $scope.Campo=obj;
        };


            
   
         $scope.aggiorna= function (obj){
            var string_=JSON.stringify(obj);
             $http.get($scope.url+"/Campo/aggiorna/"+string_).success(function (todoA){
                $scope.message="aggiornato";
             
          myAside.hide();
             
                });
          
        };


            
   
         $scope.destroy = function (obj){
            var string_=JSON.stringify(obj);
             $http.get($scope.url+"/Campo/destroy/" + string_).success(function (mes){
                $scope.message=mes;
                    var index = $scope.lista.indexOf(obj);
               $scope.lista.splice(index, 1);
          myAside.hide();
             
                });
          
        };


            

        });//Fine  toDoController

          