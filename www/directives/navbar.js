app.directive('navbar', [function(){
  // Runs during compile
  return {
    templateUrl: '/directives/navbar.html',
    controller: ['$scope', function($scope) {
      //Navbar Expand
      $scope.navExpanded = false;
      $scope.$on('$routeChangeStart', function() {
        $scope.navExpanded = false;
      });
    }]
  };
}]);