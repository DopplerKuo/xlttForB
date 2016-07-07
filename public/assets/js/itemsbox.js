$(document).ready(function() {
	$(".xltt-2-window .card").click(function(event) {
		$(".xltt-2-window-pop").fadeIn(300);
		var thisx = $(this).attr("data-item");
		$('.xltt-2-window-pop>div[data-item=' + thisx + ']').fadeIn(0);
	});
	// $("#itemsbox .close").click(function(event) {
	// 	$("#itemsbox").fadeOut(300);
	// 	$('#itemsbox>div').fadeOut(0);
	// });
	$(".xltt-2-window-pop .bg").click(function(event) {
		$(".xltt-2-window-pop").fadeOut(300);
		$('#itemsbox>div').fadeOut(0);
	});
});