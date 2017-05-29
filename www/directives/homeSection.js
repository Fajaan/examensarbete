app.directive('homeSection', [function(){
    // Runs during compile
	return {
    templateUrl: '/directives/homeSection.html',
    controller: ['$scope', '$interval', function($scope, $interval) {
    	// scope image
        $scope.imgs = [
    		"imgs/homeCarousel/carousel1.JPG",
    		"imgs/homeCarousel/carousel2.JPG"
    	];
        // interval
    	$scope.myInterval = 7000;
	    $scope.noWrapSlides = false;
	    $scope.active = 0;
    }]
  };
}]);