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
