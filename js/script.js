$(document).ready(function () {
  $(".lv1").mouseenter(function () {
    //$("ul.lv2").css("display","block");
    $(this).find(".lv2").stop().slideDown();
    //$(this).find("ul.lv2").stop().slideDown();
  });
  $(".lv1").mouseleave(function () {
    //$("ul.lv2").css("display","none");
    $(this).find(".lv2").stop().slideUp();
    //$(this).find("ul.lv2").stop().slideUp();
  });
});

/*이미지 슬라이드*/
$(document).ready(function () {
  var cnt = 1;
  var margin_Left = -1000;
  setInterval(function () {
    $(".slideWrap>ul").animate(
      { "margin-left": margin_Left * cnt },
      function () {
        if (cnt !== 3) cnt++;
        else {
          cnt = 0;
        }
      }
    );
  }, 2000);
});

/*탭*/
var tabBtn = $(".tab_btn > ul > li"); //각각의 버튼을 변수에 저장
var tabCont = $(".tab_cont > div"); //각각의 콘텐츠를 변수에 저장

//컨텐츠 내용을 숨겨주세요!
tabCont.hide().eq(0).show();

tabBtn.click(function (e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  tabBtn.removeClass("on");
  target.addClass("on");
  tabItem.css("display", "none");
  tabItem.eq(index).css("display", "block");
});
