var $ = global.jQuery = require('jquery');
require('bootstrap');
var angular = require('angular');
var animate = require('animo-animate');

require('angular-route');
require('angular-animate');


var pageJsInit = function(){
  $('#form-commit').on('click',function(){
    var company = $('#companyname');
    var username = $('#username');
    var phone = $('#phone');
    if(company.val().trim()=="" || username.val().trim()=="" || phone.val().trim()==""){
      alert("请将信息填写完整!");
      return;
    }
    var json = "{\"name\":\""+company.val()+"\",\"contacts\":\""+username.val()+"\",\"phoneNo\":\""+phone.val()+"\"}";
    var beanName = "AdCommunitySign";
    $.ajax({
      type:"get",
      url:"http://120.26.65.65:8290/ad/ads/sub.do?json="+json+"&beanName="+beanName,/*url写异域的请求地址*/
      dataType:"jsonp",/*加上datatype*/
      jsonpCallback:"callback",/*设置一个回调函数，名字随便取，和下面的函数里的名字相同就行*/
      success:function(json){
        if(json.code=="000"){
          company.val("");
          username.val("");
          phone.val("");
          alert("感谢您的参与 亿投传媒会尽快联系您...");
        }else{
          alert("提交失败");
        }
      },
      error:function(e){
        //alert("提交失败11");
      }
    });
  })

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
