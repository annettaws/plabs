
  var bApp = angular.module('bApp', ['ngAnimate',
        'mgcrea.ngStrap',
        'openlayers-directive',
        'AngularGM','ui.grid',
        'ngTouch',
        'ui.grid.selection',
        'ngSanitize',
        'eehNavigation',
      'pascalprecht.translate',
      'angularUtils.directives.dirPagination'
  
       ]
       //,
 // function($interpolateProvider) {
   //     $interpolateProvider.startSymbol('<%');
   //     $interpolateProvider.endSymbol('%>');
   // }
            ); 
    
   bApp.config(['eehNavigationProvider', function(eehNavigationProvider) {
    eehNavigationProvider
      .menuItem('myMenu.home', {
        text: 'Home',
        iconClass: 'glyphicon-home',
        weight: -10,
        href: baseUrl +'home'
      })
      .menuItem('myMenu.users', {
        text: 'Users',
        iconClass: 'glyphicon-user',
        weight: -8,
        href: baseUrl +'clienti'
      })
      .menuItem('myMenu.ToDO', {
        text: 'ToDO',
        iconClass: 'glyphicon-th',
        weight: -8,
        href: baseUrl +'todo'
      })
      .menuItem('myMenu.settings', {
        text: 'Settings',
        iconClass: 'glyphicon-cog',
        weight: -6,
        href: '#'
      });
  }]);
  
  bApp.config(function(paginationTemplateProvider) {
   paginationTemplateProvider.setPath(pubicUrl+'/bower_components/angularUtils-pagination/dirPagination.tpl.html');
 //   paginationTemplateProvider.setPath('http://localhost/LocalPlab/pLabS/public/bower_components/angularUtils-pagination/dirPagination.tpl.html');
});
  
  bApp.config(function($datepickerProvider) {
  angular.extend($datepickerProvider.defaults, {
   dateFormat: 'dd/MM/yyyy',
   timezone:'UTC'
   //,
  //  startWeek: 1,
  //  template:pubicUrl+'/templates/datepicker.tpl.html'
  });
  });
  bApp.controller('MainController', function ($scope) {
    $scope.searchCallback = function (query) {
      $scope.searchTerm = query;
    };
  });
 
 
bApp.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }]);

  bApp.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl){
               var fd = new FormData();
               fd.append('file', file);
            
               $http.get(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){
               })
            
               .error(function(){
               });
            }
         }]);