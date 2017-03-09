/**
 * Created by tedyuen on 09/03/2017.
 */
var myApp = angular.module('myApp', [

]);


myApp.controller('page6Controller',['$scope','$timeout',function ($scope,$timeout) {
  $scope.test = "abc";


  $scope.classData = [
    {name:'所有',className:'all'},
    {name:'分类一',className:'class1'},
    {name:'分类二',className:'class2'},
  ]

  $scope.listData = [
    {name:'',img:'images/project/template_img.jpg',className:['all','class1']},
    {name:'',img:'images/project/template_img.jpg',className:['all','class2']},
    {name:'',img:'images/project/template_img.jpg',className:['all','class1']},
    {name:'',img:'images/project/template_img.jpg',className:['all','class2']},
    {name:'',img:'images/project/template_img.jpg',className:['all','class2']},

  ]

  var button_class = "gallery-header-center-right-links-current";
  var $container = $('#gallery-content-center');


  var check_button = function(className){
    $('.gallery-header-center-right-links').removeClass(button_class);
    $("#filter-"+className).addClass(button_class);
  }


  $timeout(function () {
    $container.isotope({itemSelector : 'img'});
    for(var index in $scope.classData){
      var temp = $scope.classData[index];
      var id = "#filter-"+temp.className;
      if(index==0){
        $(id).addClass(button_class);
      }
      $(id).bind('click',function() {
        $container.isotope({ filter: '.'+$(this).attr('name') });
        check_button($(this).attr('name'));
      });
    }
  },20);
}]);
