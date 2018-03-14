//css
$(document).ready(function() {
  $('.nav-item').hover(function() {
    var navLIHei = 0;
    $(this).children('ul').children('li').each(function() {
      navLIHei += $(this).height();
    })
    $(this).children('ul').height(navLIHei);
  });


  // index-video
  function getVideoHeight() {
    var videoHeight = $(window).height();
    var videoWidth = $(window).width();
    $('.full-screen-video').height(videoHeight);
    $('.full-screen-video').width(videoWidth);
    if ((videoWidth * 1080 / 1920) < videoHeight) {
      $('.index-video video,.index-backgrond img').height(videoHeight);
      $('.index-video video,.index-backgrond img').width('auto');
    } else {
      $('.index-video video,.index-backgrond img').width(videoWidth);
      $('.index-video video,.index-backgrond img').height('auto');
    }
  }
  getVideoHeight();
  $(window).resize(function() {
    getVideoHeight();
  })
  //判断导航状态
  var scrollBefore = $(window).scrollTop();
  $(window).scroll(function() {
    var scrollAfter = $(window).scrollTop();
    if (document.body.scrollTop > 10) {
      $('.header').addClass('header-bg');
    } else {
      $('.header').removeClass('header-bg');
    }
    if (scrollBefore < scrollAfter) {
      $('.header').addClass('header-hide');
      $('.header').removeClass('header-show');


    } else {
      $('.header').addClass('header-show');
      $('.header').removeClass('header-hide');

    }
    scrollBefore = scrollAfter;

  })
});
