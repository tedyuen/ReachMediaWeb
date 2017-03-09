// Declare the main module


// Initialize the main module
myApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {

  'use strict';

  /**
   * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
   * @param  {String} path               The root-relative url for the new route
   * @param  {String} pageAnimationClass A classname defining the desired page transition
   */
  $rootScope.go = function (path, pageAnimationClass) {
    console.log("go 1");
    if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
      $rootScope.pageAnimationClass = 'crossFade';
    }

    else { // Use the specified animation
      $rootScope.pageAnimationClass = pageAnimationClass;
    }
    console.log("go 2");

    if (path === 'back') { // Allow a 'back' keyword to go to previous page
      $window.history.back();
    }


    else { // Go to the specified path
      $location.path(path);
      $(function(){ $(window).scrollTop(0)});
      $('.navbar-collapse').removeClass('in');
    }
    console.log("go 3");
  };
}]);

// Configure the main module
myApp.config(['$routeProvider', function ($routeProvider) {

  'use strict';
  // $urlRouterProvider.when('','/page1').otherwise('/page1');

  $routeProvider
    .when('/page1', {
      templateUrl: 'page1.html',
      controller:'page1Controller'
    })
    .when('/page2', {
      templateUrl: 'page2.html',
      controller:'page2Controller'
    })
    .when('/page3', {
      templateUrl: 'page3.html',
      controller:'page3Controller'
    })
    .when('/page4', {
      templateUrl: 'page4.html',
      controller:'page4Controller'
    })
    .when('/page5', {
      templateUrl: 'page5.html',
      controller:'page5Controller'
    })
    // .when('/page6', {
    //   templateUrl: './page6.html',
    //   controller:'page6Controller'
    // })


    .otherwise({
      templateUrl: 'page1.html',
      controller:'page1Controller'
    });
}]);
