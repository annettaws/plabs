 bApp.controller('listiniControllers',function (
         $scope,
            $http,
            $modal,
            $aside)
 {
       $scope.publicUrl=pubicUrl;
      $scope.url=baseUrl;
      
        $scope.nomeController = 'clientiCTR';

        
 		$http.get($scope.url+"/current_user") 
            .success(function(data) { 
                $scope.users = data; 
            }) 
            .error(function() { 
                alert("Si \'e verificato un errore!"); 
            });

        var createAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/clienti/clientiAside.tpl.html',show: false} );

         $scope.create = function() {
                 createAside.show();
                };

         $scope.addNew= function (cliente){
             
               
     
            var l = {
                titolo: cliente.titolo,
                name: cliente.nome,
                cognome: cliente.cognome,
                email: cliente.email,
                tel: cliente.tel,
                cell: cliente.cell,
                fax: cliente.fax,
                user_id: $scope.users.id
                //follows_user_id:null

            };
           

            $http.post($scope.url+"Clienti/add-new",l).then(function (lA){
            $scope.message=lA.data;
             
           //listaDaFare();
               // $scope.todos.push(todoA.data);
            });
           
        createAside.hide();
  
        };     

        $scope.seleziona= function (c){
            $http.get($scope.url+"Clienti/cliente-id/"+c.id).success(function (R){
                    $scope.message=R;     
            $scope.cliente=R;    
            }); 
           };
   



        //Liste
        $http.get($scope.url+"Utenti/lista-utenti/").success(function (c){
            $scope.listaUtenti=c;
            });    
 

}); 