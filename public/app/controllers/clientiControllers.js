 bApp.controller('clientiControllers',function (
         $scope,
            $http,
            $modal,
            $aside)
 {
       $scope.publicUrl=pubicUrl;
      $scope.url=baseUrl;
      
        $scope.nomeController = 'clientiCTR';
        $scope.cliente=null; 
        
 		$http.get($scope.url+"/current_user") 
            .success(function(data) { 
                $scope.users = data; 
            }) 
            .error(function() { 
                alert("Si \'e verificato un errore!"); 
            });

        var createAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/clienti/clientiAside.tpl.html',show: false} );

         $scope.create = function() {
                $scope.cliente=null; 
                 createAside.show();
               $scope.listaUtentiF();
                };

         $scope.addNewCliente= function (cliente){
             
               
     
            var l = {
                titolo: cliente.titolo,
                name: cliente.nome,
                cognome: cliente.cognome,
                email: cliente.email,
                tel: cliente.tel,
                cell: cliente.cell,
                fax: cliente.fax,
                user_id: cliente.user.id
                //follows_user_id:null

            };
           

            $http.post($scope.url+"Clienti/add-new",l).then(function (lA){
            $scope.message=lA.data;
             
           //listaDaFare();
               // $scope.todos.push(todoA.data);
            });
           
        createAside.hide();
          $scope.listaClientiF();
  
        };   


        $scope.delete=function (object){
            $http.delete($scope.url+"Utenti/destroy/"+object.id) 
                .success(function(message) { 
                     $scope.message=message.data;
             var index = $scope.listaClienti.indexOf(object);
               $scope.listaClienti.splice(index, 1);
               $scope.cliente=null;    
          

              //$scope.todos.shift();
                      //  $http.get($scope.url+"/todos").success(function (todos){
                       //     $scope.todos=todos;
                      //  });
                }) 
                .error(function() { 
                    alert("Si \'e verificato un errore!"); 
                }); 
            myAside.hide();
      
      
        };
    

        $scope.seleziona= function (c){
            $http.get($scope.url+"Clienti/cliente-id/"+c.id).success(function (R){
                    $scope.message=R;     
            $scope.cliente=R;    
            }); 
           };
   





        //Liste
        $http.get($scope.url+"Clienti/lista-clienti").success(function (c){
            $scope.listaClienti=c;
            });    
    $scope.listaClientiF= function (){ 
             $http.get($scope.url+"Clienti/lista-clienti").success(function (c){
            $scope.listaClienti=c;
            });  
    };   
    $scope.listaUtentiF= function (){ 
        $http.get($scope.url+"Utenti/lista-utenti/").success(function (c){
            $scope.listaUtenti=c;
            });    
    }; 


      $scope.regioni=[];
        $scope.regioneSelezionata="";
        $scope.provincie=[];
        $scope.provinciaSelezionata="";
        $scope.comuni=[];

  var localitaAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/localita/localitaAside.tpl.html',show: false} );

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
                           localizzazione_id: $scope.cliente.id,
                             localizzazione_type: "cliente",
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