$(function () {
	// Owl Carousel
	var owl = $(".main-demo .owl-carousel");
	owl.owlCarousel({
		items: 1,
		nav: false,
		autoplay: true,
		loop: true,
		margin: 0,
		dots: true,
		rtl: true,
		autoplay: 100000, // time for slides changes
		smartSpeed: 5000, // duration of change of 1 slide
	});
});