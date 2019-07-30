/*==========Owl Carousel Banners =========*/
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
