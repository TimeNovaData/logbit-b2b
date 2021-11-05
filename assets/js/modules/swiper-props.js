const swiperHome = {
	slidesPerView: 1,
	centeredSlides: true,
	speed: 600,
	spaceBetween: 0,
	clickable: true,
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: document.querySelector('.one-next'),
		prevEl: document.querySelector('.one-prev'),
	},
}