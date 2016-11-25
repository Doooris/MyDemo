/**
 * Created by sitin on 16/11/25.
 */
$(function(){
  var i = 0;
  $(".imgs ul").append($(".imgs li:first").clone());
  var size = $(".imgs li").size();
  for(var j=0;j<size-1;j++){
    $(".circle").append("<span></span>");
  }
  $(".circle span:first").addClass("on");
  $(".circle span").click(function(){
    var index = $(this).index();
    i = index;
    $(this).addClass("on").siblings().removeClass("on");
    $(".imgs ul").stop().animate({left:-i*400});
  })
  function moveR(){
    i++;
    if(i == size-1) {
      $(".circle span").eq(0).addClass("on").siblings().removeClass("on");
    }
    if(i ==size){
      $(".imgs ul").css("left",0);
      i=1;
    }
    $(".circle span").eq(i).addClass("on").siblings().removeClass("on");
    $(".imgs ul").stop().animate({left:-i*400});
  }
  function moveL(){
    i--;
    if(i == -1){
      $(".imgs ul").css({left: -3200});
      i = size -2;
    }
    $(".circle span").eq(i).addClass("on").siblings().removeClass("on");
    $(".imgs ul").stop().animate({left:-i*400});
  }
  $(".next").click(function(){
    moveR();
  });
  $(".prev").click(function(){
    moveL();
  })
  var  t= setInterval(function(){moveR();},2000);
  $(".outwrap").hover(function(){
    clearInterval(t);
  },function(){
    t= setInterval(function(){moveR();},2000);
  })
});
