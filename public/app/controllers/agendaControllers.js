 bApp.controller('agendaControllers',function ($scope,$http){
      $scope.url=baseUrl;
        
        $scope.nomeController = 'agendaCTR';

      $scope.addNew= function (){
            var contatto = {
                nome: $scope.nome,
                cognome: $scope.cognome,
                email: $scope.email,
                telefono: $scope.telefono
                
            };
 
            $scope.nome="";
            $scope.cognome="";
            $scope.email="";
            $scope.telefono="";
        
            $http.post($scope.url+"agenda/crea",contatto);
            
            
            
        };
        
  
   
 
  
  

}); 