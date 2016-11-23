 bApp.controller('impostazioniControllers',function (
        $scope,
        $http,
        $modal,
        $aside)
        {
            
        $scope.publicUrl=pubicUrl;    
        $scope.url=baseUrl;
        
  
        $scope.delete=function (todo){
            $http.delete($scope.url+"/todos/"+todo.id) 
                .success(function(message) { 
                     $scope.message=message.data;
             var index = $scope.todos.indexOf(todo);
               $scope.todos.splice(index, 1);
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
  
  
   
        
        $scope.ripristinaComini= function (){ 
            $http.get($scope.url+"/ripristinaComuni").success(function (message){
                   $scope.message=message.data;});
        };

    
       
       // var myOtherModal = $modal({  scope: $scopxe, templateUrl: '/page/todo/new.tpl.html', show: false});
       // var myOtherModal = $modal({  scope: $scope, templateUrl: $scope.publicUrl + '/page/todo/new.tpl.html', show: false});

    // $scope.showModal = function() {
     //     myOtherModal.$promise.then(myOtherModal.show);
     //   };

     //   var modalUpdate = $modal({  scope: $scope, templateUrl: $scope.publicUrl + '/page/todo/update.tpl.html', show: false});

    // $scope.showModalUpdate = function() {
    //      myOtherModal.$promise.then(modalUpdate.show);
    //    };


    
  
        
        
        
        
  
        

});//Fine  toDoController

