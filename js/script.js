const swiper = new Swiper('.image-slider', {

	autoHeight: false,
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	navigation: {
		nextEl: '.swiper-next',
		prevEl: '.swiper-prev',
	},
});