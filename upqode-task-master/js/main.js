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


// owlCarousel
// $(function () {
// 	// Owl Carousel
// 	var owl = $(".owl-carousel");
// 	owl.owlCarousel({
// 		items: 1,

// 		nav: true,

// 		autoplay: true,

// 		animateOut: "slideOutDown",

// 		animateIn: "slideInDown",

// 		rtl: false,

// 		loop: true,

// 		margin: 10,

// 		dots: true,

// 		autoplay: 3000, // time for slides changes

// 		smartSpeed: 1000, // duration of change of 1 slide

// 		responsiveClass: true,

// 		responsive: {

// 			0: {

// 				items: 1

// 			},

// 			600: {

// 				items: 1

// 			},

// 			2000: {

// 				items: 1,

// 				loop: true

// 			}

// 		}

// 	});

// });

var owl = $(".home-demo .owl-carousel").owlCarousel({
	autoplayTimeout:6000,
	autoplay: true,
	items: 1,            
	loop: true,
	dots: true,			
	nav: true,
	onDragged: setDelay,
	rtl: true,
	navText : ["",""],
});

owl.on('initialized.owl.carousel translated.owl.carousel', function () {
setDelay();
});

function setDelay(){
owl.trigger('stop.owl.autoplay'); 

var defaultTiming = 10000;
var carouselTiming = $('.home-demo .owl-item.active .item').data('timing') ? $('.home-banner .owl-item.active .item').data('timing') : defaultTiming;

setTimeout(function () {
	owl.trigger('next.owl.carousel',[carouselTiming]); 
},carouselTiming);
} 