$(document).ready(function() {
  // nav
  $(".menu-btn").click(function() {
    $(this).toggleClass('open');
    $(".menu-container").toggleClass('open');
  });
  // page change animate
  $(".letmehide").click(function() {
    $(".menu-container").removeClass('open');
    $(".menu-btn").removeClass('open');
    $("section").addClass('hide');
  });
  // nav END
  // index slider
  $('.slider').unslider({
    autoplay: true,
    speed: 1000,              
    delay: 3500, 
    infinite: true,
    nav: false,
    arrows: false,
    animation: 'fade',
  });
  // index slider END
  // about-fn
  $('.fn-1').click(function() {
    $('.fn-show').fadeIn(0); 
    $(".fn-show-content").removeClass('open');
    $(".fn-show-content.a").addClass('open');
  });
  $('.fn-2').click(function() {
    $('.fn-show').fadeIn(0); 
    $(".fn-show-content").removeClass('open');
    $(".fn-show-content.b").addClass('open');
  });
  $('.fn-3').click(function() {
    $('.fn-show').fadeIn(0); 
    $(".fn-show-content").removeClass('open');
    $(".fn-show-content.c").addClass('open');
  });
  $('.sec-text .close').click(function() {
    $('.fn-show').fadeOut(0);
    $(".fn-show-content").removeClass('open');
  });
  var goFindIt;
  $(".dd").click(function() {
    goFindIt = $(".fn-show").offset().top;
    $(document.body).animate({
      scrollTop: (goFindIt)
    })
  }); 
  // about-fn END
  // xltt-1
  $(".img-select img").click(function() {
    var imgSrc = $(this).attr("src");
    var imgBig = $(this).parent(".img-select").siblings("img.big");
    imgBig.attr("src", imgSrc);
  });
  $(".xltt-1-nav span").click(function() {
     $(".xltt-1-nav span").removeClass('target');
     $(this).addClass('target');
  });
  $(".xltt-1-nav span.a").click(function() {
    $(".xltt-1-content").removeClass('show');
    $(".xltt-1-content.a").addClass('show');
  });
  $(".xltt-1-nav span.b").click(function() {
    $(".xltt-1-content").removeClass('show');
    $(".xltt-1-content.b").addClass('show');
  });
  $(".xltt-1-nav span.c").click(function() {
    $(".xltt-1-content").removeClass('show');
    $(".xltt-1-content.c").addClass('show');
  });
  // xltt-1 slider

  // xltt-2
  $("#man").click(function() {
    $(this).addClass('target');
    $(".xltt-2").addClass('show');
    $(".xltt-2-intro").not(".xltt-2-intro.man").hide();
  });
  $("#woman").click(function() {
    $(this).addClass('target');
    $(".xltt-2").addClass('show');
    $(".xltt-2-intro").not(".xltt-2-intro.woman").hide();
  });
  $("#girl").click(function() {
    $(this).addClass('target');
    $(".xltt-2").addClass('show');
    $(".xltt-2-intro").not(".xltt-2-intro.girl").hide();
  });
  $("#boy").click(function() {
    $(this).addClass('target');
    $(".xltt-2").addClass('show');
    $(".xltt-2-intro").not(".xltt-2-intro.boy").hide();
  });
  $(".xltt-2-intro span.a").click(function() {
    $(".family-card").removeClass('target');
    $("#man").addClass('target');
    $(".xltt-2-intro").show();
    $(".xltt-2-intro").not(".xltt-2-intro.man").hide();
  });
  $(".xltt-2-intro span.b").click(function() {
    $(".family-card").removeClass('target');
    $("#woman").addClass('target');
    $(".xltt-2-intro").show();
    $(".xltt-2-intro").not(".xltt-2-intro.woman").hide();
  });
  $(".xltt-2-intro span.c").click(function() {
    $(".family-card").removeClass('target');
    $("#girl").addClass('target');
    $(".xltt-2-intro").show();
    $(".xltt-2-intro").not(".xltt-2-intro.girl").hide();
  });
  $(".xltt-2-intro span.d").click(function() {
    $(".family-card").removeClass('target');
    $("#boy").addClass('target');
    $(".xltt-2-intro").show();
    $(".xltt-2-intro").not(".xltt-2-intro.boy").hide();
  });
  // xltt-2 END
  $("#nav .btn").click(function() {
      $("#nav").toggleClass('open')
    });
    $("#nav a").click(function() {
      $("#nav").removeClass('open')
  });
  // youtube-box  
  $('.s1-playvideo').click(function() {
    $('.youtube-box').fadeIn(300); 
  });
  $('.youtube-box .img-bg-black').click(function() {
    $('.youtube-box').fadeOut(300);
  });
// youtube-box END
//上方導覽列
$("#nav>a").click(function() {
    var target = $(".gofindit").eq($(this).index());
    var v_center = $(window).height() > target.height() ? $(window).height() / 2 - target.height() / 2 : 0;
    var position = target.offset().top - v_center;
    $("html,body").animate({
        scrollTop: position
    })
});
$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(".gofindit").height();
  var scrollPosition = scrollTop + windowHeight;
  var index = -1;
  $(".gofindit").each(function(i, element) {
    var j_this = $(this);
    if( scrollPosition > j_this.offset().top + windowHeight / 2) {
      index = i;
    }
  });
  $("#nav>a").eq(index).addClass("active").siblings().removeClass("active");
})
// $("#nav").headroom();
//上方導覽列 END
}); // doc ready END

// reveal
window.sr = ScrollReveal();
sr.reveal('.sec1 .reveal',300);
sr.reveal('.sec2 .reveal',400);
sr.reveal('.sec3 .reveal',400);
sr.reveal('.sec4 .reveal',400);
sr.reveal('.sec5 .reveal',340);
// reveal END



