// navMenu
(function ($) {
	$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
		if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
		}
		var $subMenu = $(this).next(".dropdown-menu");
		$subMenu.toggleClass('show');

		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
			$('.dropdown-submenu .show').removeClass("show");
		});

		return false;
	});
})(jQuery)




/*==========Owl Carousel Banners=========*/
var owl = $(".main-demo .owl-carousel").owlCarousel({
	autoplayTimeout: 6000,
	autoplay: true,
	items: 1,
	loop: true,
	dots: true,
	nav: true,
	onDragged: setDelay,
	rtl: true,
	navText: ["", ""],
});

owl.on('initialized.owl.carousel translated.owl.carousel', function () {
	setDelay();
});

function setDelay() {
	owl.trigger('stop.owl.autoplay');

	var defaultTiming = 10000;
	var carouselTiming = $('.main-demo .owl-item.active .item').data('timing') ? $('.home-banner .owl-item.active .item').data('timing') : defaultTiming;

	setTimeout(function () {
		owl.trigger('next.owl.carousel', [carouselTiming]);
	}, carouselTiming);
}






document.addEventListener("DOMContentLoaded", function () {

	var progressBar = document.querySelectorAll(".progress-bar");
	var time = 5000;


	progressBar.forEach(function (i) {
		let label = i.children[0];
		let line = i.children[1];
		let count = 0;
		let dataCount = label.getAttribute("data-count");
		let lineCount = line.children[0];

		let runTime = time / dataCount;

		let animationLineCount = setInterval(function () {
			if (count < dataCount) {
				count++;
				label.innerHTML = count + '%';
				lineCount.style.width = count + '%';
			}
		}, runTime);
	});
});


// owlCarousel iPads

		 
$(function () {
	// Owl Carousel
	var owl = $(".ipads-demo .owl-carousel");
	owl.owlCarousel({
		items: 1,
		nav: false,
		autoplay: true,
		loop: true,
		margin: 100,
		dots: false,
		autoplay: 10000, // time for slides changes
		smartSpeed: 30000, // duration of change of 1 slide
	});
});