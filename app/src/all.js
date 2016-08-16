var $ = global.jQuery = require('jquery');
require('bootstrap');
var angular = require('angular');
var animate = require('animo-animate');

require('angular-route');
require('angular-animate');
var LogUtil = require('./bean/LogUtil');
var log = new LogUtil(true);//Set can out log.


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

setTimeout(pageJsInit,500);

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
      }else if(path=="/page3"){
        $('#tab-2-bottom').addClass('tab-bottom-active');
      }else if(path=="/page4"){
        $('#tab-3-bottom').addClass('tab-bottom-active');
      }else if(path=="/page5"){
        $('#tab-4-bottom').addClass('tab-bottom-active');
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
    .when('/page3', {
      templateUrl: 'page3.html'
    })
    .when('/page4', {
      templateUrl: 'page4.html'
    })
    .when('/page5', {
      templateUrl: 'page5.html'
    })

    .otherwise({
      templateUrl: 'page1.html'
    });
}]);
