var $ = global.jQuery = require('jquery');
//require('bootstrap');
var angular = require('angular');
//var animate = require('animo-animate');

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
