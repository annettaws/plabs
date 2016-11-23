 bApp.controller('testsControllers',function ($scope,$http){
      $scope.url=baseUrl;
        
        $scope.nomeController = 'testsControllers';


        $scope.modal = {title: 'Modal Title', content: 'Modal content'};
        $scope.tooltip = {title: 'Tooltip Title'};
        $scope.popover = {title: 'PopOver Title', content: 'PopOver content'};
        $scope.aside = { "title": "Title", "content": "Hello Aside<br />This is a multiline message!",  show: true};
 
  
  

}); 