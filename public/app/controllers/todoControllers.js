 bApp.controller('toDoController',function (
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
        
        
        $scope.message="";
        $scope.users = [];
        $scope.nomeController = 'ToDO';
        var scenario;
        $scope.buttonScenario=0;
        $scope.tooltip = {title: 'carica Tutti'};
          
     
        $scope.buttonScen= function (b){ 
                $scope.button = {
                "radio": b
                };
            }; 
     
     //Liste
        $http.get($scope.url+"/todos/dafare").success(function (todos){
            $scope.todos=todos;
            scenario='daFare';        
            $scope.buttonScen(scenario);
            });
            
        $scope.listaDaFare= function (){ 
            $http.get($scope.url+"/todos/dafare").success(function (todos){
                   scenario='daFare';
            $scope.todos=todos;});
            };    
        
        $scope.listaFatti= function (){ 
            $http.get($scope.url+"/todos/fatti").success(function (todos){
               scenario='fatti';
               $scope.buttonScen(scenario);
                $scope.todos=todos;});
            };    
            

    
  
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
  
  
   
        
        $scope.listaTodo= function (){ 
            $http.get($scope.url+"/todos").success(function (todos){
                   scenario='tutti';
                      $scope.buttonScen(scenario);
            $scope.todos=todos;});
        };

    
       
       // var myOtherModal = $modal({  scope: $scope, templateUrl: '/page/todo/new.tpl.html', show: false});
       // var myOtherModal = $modal({  scope: $scope, templateUrl: $scope.publicUrl + '/page/todo/new.tpl.html', show: false});

    // $scope.showModal = function() {
     //     myOtherModal.$promise.then(myOtherModal.show);
     //   };

     //   var modalUpdate = $modal({  scope: $scope, templateUrl: $scope.publicUrl + '/page/todo/update.tpl.html', show: false});

    // $scope.showModalUpdate = function() {
    //      myOtherModal.$promise.then(modalUpdate.show);
    //    };


        $scope.seleziona1= function (todo){
            $http.get($scope.url+"/todos/"+todo.id).success(function (todo){
               modalUpdate.$promise.then(modalUpdate.show);
            $scope.message=todo;     
            $scope.todo=todo;    
            }); 
           };
   
        $scope.seleziona= function (todo){
            modalUpdate.$promise.then(modalUpdate.show);
            $scope.message=todo;
            $scope.todo=todo;
        };
   
   
         $scope.update= function (todo){
            
             $http.put($scope.url+"/todos/"+todo.id,todo).then(function (todoA){
                $scope.message=todoA.data;
                 if(scenario!='tutti'){
                    var index = $scope.todos.indexOf(todo);
               $scope.todos.splice(index, 1);
                 };
                });
          
        };
   
         var myAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/todo/aside.tpl.html',show: false} );
          
         var myAsideNew = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/todo/asideNew.tpl.html',show: false});
          
 
   
   
   $scope.showAside = function() {
         myAside.show();
        };
    $scope.showAsideNew = function() {
         myAsideNew.show();
        };
        
    $scope.updateAside= function (todo){
             $http.put($scope.url+"/todos/"+todo.id,todo).then(function (todoA){
                $scope.message=todoA.data;
                //   $scope.todos.;
                  myAside.hide();
                });
            };
            
      $scope.selezionaAside= function (todo){
            myAside.show();
            $scope.message=todo;
            $scope.todo=todo;
        };


   $scope.addAsideNew= function (to){
             
                  scenario='daFare';
                     $scope.buttonScen(scenario); 
     
            var todo = {
                text: to.todotxt,
                done: '0',
                 dataDiEsecuzione: to.dataDiEsecuzione 
            };
           
            $scope.todotxt="";
            $http.post($scope.url+"/todos",todo).then(function (todoA){
            $scope.message=todoA.data;
              $http.get($scope.url+"/todos/dafare").success(function (todos){
             
            $scope.todos=todos;});
           //listaDaFare();
               // $scope.todos.push(todoA.data);
            });
           
        myAsideNew.hide();
  
        };
        
        
        
        
  
        

});//Fine  toDoController

