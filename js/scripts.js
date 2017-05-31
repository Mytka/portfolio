$(document).ready(function () {
	//scroll-to
	$('.scroll-to').click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 300);
		return false;
	});

})
