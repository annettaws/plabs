

 bApp.controller('localitaControllers',function (
        $scope,
        $http,
        $modal,
        $aside)
        {
            
        $scope.publicUrl=pubicUrl;    
        $scope.url=baseUrl;

    $http.get($scope.url+"/current_user") 
            .success(function(data) { 
                $scope.users = data; 
            }) 
            .error(function() { 
                alert("Si \'e verificato un errore!"); 
            });

     //dichiarazione variablii  
        $scope.message="";
        $scope.users = [];
        $scope.nomeController = 'localitaControllers';
 
        
        $scope.regioni=[];
        $scope.regioneSelezionata="";
        $scope.provincie=[];
        $scope.provinciaSelezionata="";
        $scope.comuni=[];

  var localitaAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/localita/localitaAside.tpl.html',show: false} );

    $http.get($scope.url+"/tuttelelocalita").success(function (c){
            $scope.listaLocalita=c;
            $scope.message=c;
            });    


   $http.get($scope.url+"/regioni").success(function (result){
                $scope.regioni=result;
                   
                });
  
    $scope.createLocalita = function() {
                 localitaAside.show();
                };


    $scope.listaprovice= function (regione){     
            $http.get($scope.url+"/rescelta/"+regione.siglaRegione).success(function (result){
                $scope.provincie=result;
           
                });
            }; 

    $scope.listaComuni= function (provicia){     
            $http.get($scope.url+"/prscelta/"+provicia.sigla).success(function (result){
                 $scope.comuni=result;
                   
                    });
            };

      $scope.addNew= function (localita){
             
               
     
            var l = {
                via: localita.via,
                 civico: localita.civico,
                   note: localita.note,
                     comune_id: localita.comuneSelezionata.id,
                       provincia_id: localita.provinciaSelezionata.id,
                         regione_id: localita.regioneSelezionata.id,
                           localizzazione_id: localita.localizzazione_id,
                             localizzazione_type: localita.localizzazione_type,
                               coordinataX: localita.coordinataX,
                 coordinataY: localita.coordinataY 
            };
           

            $http.post($scope.url+"/localita",l).then(function (lA){
            $scope.message=lA.data;
             
           //listaDaFare();
               // $scope.todos.push(todoA.data);
            });
           
        localitaAside.hide();
  
        };         

        }); 


