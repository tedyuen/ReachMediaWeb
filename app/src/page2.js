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
