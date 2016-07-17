$(document).ready(function() {
	// 了解款式
	$(".xltt-2-window .card").click(function(event) {
		$(".xltt-2-window-pop").fadeIn(300);
		$(".xltt-2-window-pop").css('display', 'flex');
		var thisx = $(this).attr("data-item");
		$('.xltt-2-window-pop>div[data-item=' + thisx + ']').fadeIn(0);
	});
	// 了解款式 關閉
	$(".xltt-2-window-pop .close").click(function(event) {
		$(".xltt-2-window-pop").fadeOut(300);
		$('.xltt-2-window-pop .pop').fadeOut(0);
	});
	$(".xltt-2-window-pop .bg").click(function(event) {
		$(".xltt-2-window-pop").fadeOut(300);
		$('.xltt-2-window-pop .pop').fadeOut(0);
	});
	// 地區選擇 關閉
	$(".selectLocation-window-pop .close").click(function(event) {
		$(".selectLocation-window-pop").fadeOut(300);
		$('.selectLocation-window-pop .pop').fadeOut(0);
	});
	$(".selectLocation-window-pop .bg").click(function(event) {
		$(".selectLocation-window-pop").fadeOut(300);
		$('.selectLocation-window-pop .pop').fadeOut(0);
	});
	// 前掛介紹 關閉
	$(".intro-window-pop .close").click(function(event) {
		$(".intro-window-pop").fadeOut(300);
		$('.intro-window-pop .pop').fadeOut(0);
	});
	$(".intro-window-pop .bg").click(function(event) {
		$(".intro-window-pop").fadeOut(300);
		$('.intro-window-pop .pop').fadeOut(0);
	});
	// 兩隻前掛介紹
	$(".s3-whatisXLTt .s3-a").click(function(event) {
		$(".intro-window-pop").fadeIn(300);
		$(".intro-window-pop").css('display', 'flex');
		var thisone = $(this).attr("data-item");
		$('.intro-window-pop>div[data-item=' + thisone + ']').fadeIn(0);
	});
	$(".s3-whatisXLTt .s3-b").click(function(event) {
		$(".intro-window-pop").fadeIn(300);
		$(".intro-window-pop").css('display', 'flex');
		var thisone = $(this).attr("data-item");
		$('.intro-window-pop>div[data-item=' + thisone + ']').fadeIn(0);
	});
	$(".two").click(function(event) {
		$('.intro-window-pop>div').fadeOut(0);
		var thisone = $(this).attr("data-item");
		$('.intro-window-pop>div[data-item=' + thisone + ']').fadeIn(0);
	});
	$(".more.b").click(function(event) {
		$(".selectLocation-window-pop").fadeOut(300);
		$('.selectLocation-window-pop .pop').fadeOut(0);
		$(".intro-window-pop").fadeIn(300);
		$(".intro-window-pop").css('display', 'flex');
		var thisone = $(this).attr("data-item");
		$('.intro-window-pop>div[data-item=' + thisone + ']').fadeIn(0);
	});
	// calltoaction
	$(".xltt-2-calltoaction .calltiaction, #nav .calltoaction").click(function(event) {
		$(".selectLocation-window-pop").fadeIn(300);
		$(".selectLocation-window-pop").css('display', 'flex');
		var thisone = $(this).attr("data-item");
		$('.selectLocation-window-pop>div[data-item=' + thisone + ']').fadeIn(0);
	});
	$(".pop .calltoaction").click(function(event) {
		$('.selectLocation-window-pop .pop').fadeOut(0);
		$(".selectLocation-window-pop").fadeIn(300);
		$(".selectLocation-window-pop").css('display', 'flex');
		var thispp = $(this).attr("data-item");
		$('.selectLocation-window-pop>div[data-item=' + thispp + ']').fadeIn(0);
	});
	// 查看尺寸
	$(".sizes.a").click(function(event) {
		var thisSize = $(this).nextAll(".unslider"); 
		thisSize.find("ul").css("left","-400%")
		thisSize.find("li").removeClass("unslider-active");
		thisSize.find("li").eq(4).addClass("unslider-active");
	});
	$(".sizes.b").click(function(event) {
		var thisSize = $(this).next(".unslider"); 
		thisSize.find("ul").css("left","-500%")
		thisSize.find("li").removeClass("unslider-active");
		thisSize.find("li").eq(5).addClass("unslider-active");
	});
	var goFindIt;
  $(".more.a").click(function() {
  	$(".xltt-2-window-pop").fadeOut(300);
		$('.xltt-2-window-pop .pop').fadeOut(0);
		$(".intro-window-pop").fadeOut(300);
		$('.intro-window-pop .pop').fadeOut(0);
  	$(".selectLocation-window-pop").fadeOut(300);
		$('.selectLocation-window-pop .pop').fadeOut(0);
    goFindIt = $(".sec4").offset().top;
    $(document.body).animate({
      scrollTop: goFindIt
    })
  });
});