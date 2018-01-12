var $ = global.jQuery = require('jquery');
require('bootstrap');
var angular = require('angular');
var animate = require('animo-animate');

require('angular-route');
require('angular-animate');
var LogUtil = require('./bean/LogUtil');
var log = new LogUtil(true);//Set can out log.

var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate'
]);

/**
 * Created by tedyuen on 09/03/2017.
 */
myApp.controller('page1Controller',['$scope',function ($scope) {
  $('.tab-bottom').removeClass('tab-bottom-active');
  $('#tab-0-bottom').addClass('tab-bottom-active');
}]);

/**
 * Created by tedyuen on 09/03/2017.
 */
myApp.controller('page2Controller',['$scope',function ($scope) {
  $('.tab-bottom').removeClass('tab-bottom-active');
  $('#tab-1-bottom').addClass('tab-bottom-active');
  var pageJsInit = function(){
    var page2CurrentTextId = "#page2-row-2-info-single-3";
    var page2AnimFlag = true;
    $('.page2-row-2-info-single').on("click",function(){
      if(page2AnimFlag){
        page2AnimFlag = false;
        var target = $(this).attr('data-target');
        $('.page2-row-2-info-single').removeClass('active');
        $(this).addClass('active');
        var targetDivId = '#'+target;
        animate(document.querySelector(page2CurrentTextId),{classNames:['animated','fadeOutDown']
          ,keep:true})
          .then(function(){
            $(targetDivId).removeClass('fadeOutDown');
            animate(document.querySelector(targetDivId),{classNames:['animated','fadeInDown'],keep:true})
              .then(function(){
                page2CurrentTextId =  targetDivId;
                page2AnimFlag = true;
              });
          });
      }
    });

    $('.page2-row-3-img-frame article').mouseover(function(){
      var toHeight = $(this).find('.page2-row-3-text-white').height();
      $(this).addClass('hover');
      $(this).find('.small-shadow').css('height',toHeight+30);
    });

    $('.page2-row-3-img-frame article').mouseleave(function(){
      $(this).removeClass('hover');
      $(this).find('.small-shadow').css('height','10px');
    });
  }

  pageJsInit();
}]);

/**
 * Created by tedyuen on 09/03/2017.
 */
myApp.controller('page3Controller',['$scope',function ($scope) {
  $('.tab-bottom').removeClass('tab-bottom-active');
  $('#tab-2-bottom').addClass('tab-bottom-active');
}]);

/**
 * Created by tedyuen on 09/03/2017.
 */
myApp.controller('page4Controller',['$scope',function ($scope) {
  $('.tab-bottom').removeClass('tab-bottom-active');
  $('#tab-3-bottom').addClass('tab-bottom-active');
}]);

/**
 * Created by tedyuen on 09/03/2017.
 */
myApp.controller('page5Controller',['$scope',function ($scope) {
  $('.tab-bottom').removeClass('tab-bottom-active');
  $('#tab-4-bottom').addClass('tab-bottom-active');
}]);

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
      templateUrl: 'page1-new.html',
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
      templateUrl: 'page1-new.html',
      controller:'page1Controller'
    });
}]);
