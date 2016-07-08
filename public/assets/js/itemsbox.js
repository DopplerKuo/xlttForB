$(document).ready(function() {
	$(".xltt-2-window .card").click(function(event) {
		$(".xltt-2-window-pop").fadeIn(300);
		$(".xltt-2-window-pop").css('display', 'flex');
		var thisx = $(this).attr("data-item");
		$('.xltt-2-window-pop>div[data-item=' + thisx + ']').fadeIn(0);
	});
	$(".xltt-2-window-pop .close").click(function(event) {
		$(".xltt-2-window-pop").fadeOut(300);
		$('.xltt-2-window-pop .pop').fadeOut(0);
	});
	$(".xltt-2-window-pop .bg").click(function(event) {
		$(".xltt-2-window-pop").fadeOut(300);
		$('.xltt-2-window-pop .pop').fadeOut(0);
	});
	$(".s3-whatisXLTt .s3-a").click(function(event) {
		$(".xltt-2-window-pop").fadeIn(300);
		$(".xltt-2-window-pop").css('display', 'flex');
		var thisrr = $(this).attr("data-item");
		$('.xltt-2-window-pop>div[data-item=' + thisrr + ']').fadeIn(0);
	});
	$(".s3-whatisXLTt .s3-b").click(function(event) {
		$(".xltt-2-window-pop").fadeIn(300);
		$(".xltt-2-window-pop").css('display', 'flex');
		var thisrr = $(this).attr("data-item");
		$('.xltt-2-window-pop>div[data-item=' + thisrr + ']').fadeIn(0);
	});
	$(".xltt-2-calltoaction .calltiaction").click(function(event) {
		$(".xltt-2-window-pop").fadeIn(300);
		$(".xltt-2-window-pop").css('display', 'flex');
		var thisoo = $(this).attr("data-item");
		$('.xltt-2-window-pop>div[data-item=' + thisoo + ']').fadeIn(0);
	});
	$(".pop .calltoaction").click(function(event) {
		$('.xltt-2-window-pop .pop').fadeOut(0);
		$(".xltt-2-window-pop").fadeIn(300);
		$(".xltt-2-window-pop").css('display', 'flex');
		var thispp = $(this).attr("data-item");
		$('.xltt-2-window-pop>div[data-item=' + thispp + ']').fadeIn(0);
	});
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
});