app.directive('galleriSection', [function(){
  // Runs during compile
  return {
    templateUrl: '/directives/galleriSection.html',
    controller: ['$scope', '$interval', function($scope, $interval) {
      //Scope image
      $scope.pics = [
        "pics/galleri/galleri1.JPG",
        "pics/galleri/galleri2.JPG",
        "pics/galleri/galleri3.JPG",
        "pics/galleri/galleri4.JPG",
        "pics/galleri/galleri5.JPG",
        "pics/galleri/galleri6.JPG",
        "pics/galleri/galleri7.JPG",
        "pics/galleri/galleri8.JPG"
      ];
      // interval
      $scope.myInterval = 10000;
      $scope.noWrapSlides = false;
      $scope.active = 0;
    }]
  };
}]);