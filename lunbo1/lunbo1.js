/**
 * Created by sitin on 16/11/10.
 */
$(function(){
  var size = $(".imgs li").size();
  for(var n =1;n<=size;n++){
    var span="<span>"+n+"</span>";
    $(".circle").append(span);
  }
  $(".circle span").eq(0).addClass("on");
  $(".circle span").click(function(){
    var index = $(this).index();
    i= index;
    $(this).addClass("on").siblings().removeClass("on");
    $(".imgs li").eq(index).stop().fadeIn(600).siblings().stop().fadeOut(600);
  });
  $("span.next").click(function(){
   move_r();
  });
  $("span.prev").click(function(){
   move_l();
  });
  var i = 0;
  var t = setInterval(move_r,3000);
  function move_r(){
    i++;
    if(i==size){i=0;}
    $(".circle span").eq(i).addClass("on").siblings().removeClass("on");
    $(".imgs li").eq(i).stop().fadeIn(600).siblings().stop().fadeOut(600);
  }
  function move_l(){
    i--;
    if(i==-1){i=size-1;}
    $(".circle span").eq(i).addClass("on").siblings().removeClass("on");
    $(".imgs li").eq(i).stop().fadeIn(600).siblings().stop().fadeOut(600);
  }
  $(".outwrap").hover(function(){
     clearInterval(t);
  },function(){
    t = setInterval(move_r,3000);
  })

})