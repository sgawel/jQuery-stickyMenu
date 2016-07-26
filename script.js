$(document).ready(function() {
	listenerHamburger();
	menuShow();
});

function listenerHamburger() {
	var toggleFlag = 0;
	$('.hamburger_btn').on('click', function() {
		$('nav').slideToggle(1000);
		if(toggleFlag == 0) {
			$('.line').css('backgroundColor', '#444');
			$('header a').css('display', 'block');
			toggleFlag = 1;
		} else {
			setTimeout(function() {
				$('.line').css('backgroundColor', '#fff');
				$('header a').css('display', 'none');
				toggleFlag = 0;
			}, 600);
		}
	});
}

function menuShow () {
	$(window).on('scroll', function() {
		if( $(window).scrollTop() > 80 ) {
				$('header').css('backgroundColor', '#fff');
				$('.line').css('backgroundColor', '#444');
				$('header a').css('display', 'block');
		} else {
				$('header').css('backgroundColor', '');
				$('.line').css('backgroundColor', '#fff');
				$('header a').css('display', 'none');
		}
	});
}


