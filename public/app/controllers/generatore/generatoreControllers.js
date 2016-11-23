 bApp.controller('generatoreControllers',function (
        $scope,
        $http,
        $modal,
        $aside)
        {
            
        $scope.publicUrl=pubicUrl;    
        $scope.url=baseUrl;
        $scope.message="Pino";


      $scope.nomeController='Generatore di oggetti nucleari';
      $scope.tipodb=['INT','VARCHAR','TEXT','DATE'];
      $scope.inicedb=['PRIMARY','UNIQUE','INDEX','FULLTEXT','SPATIAL'];




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
  




        $scope.creaCampi= function (numeroCampi){ 
       // var campo={'n':''};

        $scope.campi={};
       var campo={'n':'','nome':'','tipo':'','lunghezzaValori':'','nullo':'','indice':'','ai':''};

        for( i=0; i<numeroCampi; i++){

             var c= {};
              c.n=i;
               c.nome='';
                c.n='';
                 c.tipo='';
                  c.lunghezzaValori='';
                   c.nullo='';
                   c.indice='';
                        c.ai='';
                        c.IdTab='';
          $scope.campi[i]=c;
             
                    }


                   };
   
        
        $scope.crea= function (data){ 

 struttura={ "nomeTabella": "" , "campiTabella": ""};
 struttura.nomeTabella= $scope.nomeStruttura;

 if(!data==''){struttura.campiTabella= data;}
  var string_=JSON.stringify(struttura);


            $http.get($scope.url+"/generatore/crea-struttura/"+string_    ).success(function (message){
                   $scope.message=message;});
        };


        
       $scope.cancella= function (test){ 
            $http.get($scope.url+"/generatore/cancella-struttura/"+test  ).success(function (message){
                   $scope.message=message;});
        };
    



        $scope.creadb= function (){ 

 //struttura={ "nomeTabella": "" , "campiTabella": ""};
// struttura.nomeTabella= $scope.nomeStruttura;

 //if(!data==''){struttura.campiTabella= data;}
//  var string_=JSON.stringify(struttura);

       
//     var testox = "" + test + "";

            $http.get($scope.url + $scope.nomeStruttura +"/creadb" ).success(function (messags){
                   $scope.message="db Creato : " + $scope.nomeStruttura ;});
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

