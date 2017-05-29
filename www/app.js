console.log("Hello world!");

// declare our angular app
// and it's dependencies
var app = angular.module("myApp", [
  'ngResource',
  'ngTouch',
  'ui.bootstrap',
  'Alertify'
]);

app.config(["$locationProvider", function($locationProvider) {

    $locationProvider.html5Mode(true);
    
}]);