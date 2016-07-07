$(document).ready(function() {
	$(".xltt-2-window .card").click(function(event) {
		$(".xltt-2-window-pop").fadeIn(300);
		var thisx = $(this).attr("data-item");
		console.log(thisx);
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
});