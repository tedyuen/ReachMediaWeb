/**
 * Created by tedyuen on 09/03/2017.
 */
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate'
]);



myApp.controller('page6Controller',['$scope',function ($scope) {
  $scope.test = "abc";
}]);
