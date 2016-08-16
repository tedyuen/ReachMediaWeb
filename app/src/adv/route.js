// Declare the main module
var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate'
]);

// Initialize the main module
myApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

  'use strict';

  /**
   * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
   * @param  {String} path               The root-relative url for the new route
   * @param  {String} pageAnimationClass A classname defining the desired page transition
   */
  $rootScope.go = function (path, pageAnimationClass) {

    if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
      $rootScope.pageAnimationClass = 'crossFade';
    }

    else { // Use the specified animation
      $rootScope.pageAnimationClass = pageAnimationClass;
    }

    if (path === 'back') { // Allow a 'back' keyword to go to previous page
      $window.history.back();
    }

    else { // Go to the specified path
      $location.path(path);
      $('.tab-bottom').removeClass('tab-bottom-active');
      if(path=="/page1"){
        $('#tab-0-bottom').addClass('tab-bottom-active');
      }else if(path=="/page2"){
        $('#tab-1-bottom').addClass('tab-bottom-active');
        setTimeout(pageJsInit,500);
      }
      $(function(){ $(window).scrollTop(0)});
      $('.navbar-collapse').removeClass('in');
    }
  };
}]);

// Configure the main module
myApp.config(['$routeProvider', function ($routeProvider) {

  'use strict';

  $routeProvider
    .when('/page1', {
      templateUrl: 'page1.html'
    })
    .when('/page2', {
      templateUrl: 'page2.html'
    })
    .otherwise({
      templateUrl: 'page1.html'
    });
}]);
