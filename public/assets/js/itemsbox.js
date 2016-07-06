$(document).ready(function() {
	$(".buyme .item").click(function(event) {
		$("#itemsbox").fadeIn(300);
		var xmg = $(this).attr("data-show");
		$('#itemsbox>div[data-show=' + xmg + ']').fadeIn(0);
	});
	$("#itemsbox .close").click(function(event) {
		$("#itemsbox").fadeOut(300);
		$('#itemsbox>div').fadeOut(0);
	});
	$("#itemsbox .bg").click(function(event) {
		$("#itemsbox").fadeOut(300);
		$('#itemsbox>div').fadeOut(0);
	});
	$("#itemsbox span.btn").click(function(event) {
		var amg = $(this).attr("data-show");
		$('#itemsbox>div').fadeOut(0);
		$('#itemsbox>div[data-show=' + amg + ']').fadeIn(0);
	});
});