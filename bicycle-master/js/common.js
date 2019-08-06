$(function () {
	// Owl Carousel
	var owl = $(".ipads-demo .owl-carousel");
	owl.owlCarousel({
		items: 1,
		nav: false,
		autoplay: true,
		loop: true,
		margin: 0,
		dots: false,
		rtl: true,
		autoplay: 100000, // time for slides changes
		smartSpeed: 1000, // duration of change of 1 slide
	});
});