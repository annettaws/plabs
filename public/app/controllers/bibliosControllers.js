 bApp.controller('bibliosControllers',function (
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
        $scope.nomeController = 'bibliosControllers';
        $scope.autori = [];
        $scope.books = [];

        $http.get($scope.url+"/biblios/autori").success(function (result){
                $scope.autori=result;
               $scope.scenario='autori';        
                });
         $http.get($scope.url+"/biblios/book").success(function (result){
                $scope.books=result;
               $scope.scenario='Book';        
                });

        var scenario;
        var creaAutoriAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/biblios/createAutoriAside.tpl.html',show: false} );
        var editAutoriAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/biblios/editAutoriAside.tpl.html',show: false} );
        var creaBookAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/biblios/createBookAside.tpl.html',show: false} );
        var editBookAside = $aside({scope: $scope, templateUrl: $scope.publicUrl + '/page/biblios/editBookAside.tpl.html',show: false} );
    

     
    //autori  
        //Liste
           //autore
          $scope.listaAutori= function (){     
            $http.get($scope.url+"/biblios/autori").success(function (result){
                $scope.autori=result;
               $scope.scenario='autori';        
                });
            };    

        //CRUD         
         $scope.createAutore = function() {
                 creaAutoriAside.show();
                };

        $scope.createAutoreHiden = function() {
                 creaAutoriAside.hide();
                };
        $scope.salvaNuovoAutore= function (autoreDat){
             
                  scenario='autori';
                             
             
                    var autore = {
                        firstname: autoreDat.firstname,
                        lastname: autoreDat.lastname                    
                         
                    };
                   
                    
                    $http.post($scope.url+"/biblios/autore",autore).then(function (result){
                    $scope.message=result.data;
                    $scope.listaAutori();
                  
                    });
                   
                creaAutoriAside.hide();
                $scope.autore="";

  
        };


    $scope.agirnaAutore= function (autore){
             $http.put($scope.url+"/biblios/autore/"+autore.id,autore).then(function (result){
                $scope.message=result.data;
                editAutoriAside.hide();
                });
            };


 $scope.cancellaAutore=function (autore){
            $http.delete($scope.url+"/biblios/autore/"+autore.id) 
                .success(function(message) { 
                     $scope.message=message.data;
                        var index = $scope.autori.indexOf(autore);
                            $scope.autori.splice(index, 1);
                }) 
                .error(function() { 
                    alert("Si \'e verificato un errore!"); 
                }); 

                editAutoriAside.hide();
        };



    $scope.selezionaAutore= function (autore){
            editAutoriAside.show();
            $scope.message=autore;
            $scope.autore=autore;
        };

   //Book  
        //Liste
           //autore


    $scope.listaBook= function (){     
            $http.get($scope.url+"/biblios/book").success(function (result){
                $scope.books=result;
               $scope.scenario='Book';        
                });
            }; 

      $scope.createBook = function() {
                 creaBookAside.show();
                };

      $scope.createBookHiden = function() {
                 creaBookAside.hide();
                };

      $scope.editBookHiden = function() {
                 editBookAside.hide();
                };
     $scope.salvaNuovoBook= function (bookdat){
             
                  scenario='Book';
                             
             
                    var book = {
                        title: bookdat.title,
                        author_id: bookdat.autore.id                   
                         
                    };
                   
                    
                    $http.post($scope.url+"/biblios/book",book).then(function (result){
                    $scope.message=result.data;
                    $scope.listaBook();
                  
                    });
                   
                creaBookAside.hide();
                $scope.Book="";

  
        };


            $scope.selezionaBook= function (book){
            editBookAside.show();
            $scope.message=book;
            $scope.book=book;
        };

    $scope.agiornaBook= function (book){
             $http.put($scope.url+"/biblios/book/"+book.id,book).then(function (result){
                $scope.message=result.data;
                editBookAside.hide();
                     $scope.listaBook();
                });
            };



 $scope.cancellaBook=function (book){
            $http.delete($scope.url+"/biblios/book/"+book.id) 
                .success(function(message) { 
                     $scope.message=message.data;
                        var index = $scope.books.indexOf(book);
                            $scope.books.splice(index, 1);
                }) 
                .error(function() { 
                    alert("Si \'e verificato un errore!"); 
                }); 

                editBookAside.hide();
        };


});//Fine  toDoController

