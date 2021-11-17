

const swiperHome = {
	slidesPerView: 1,
	centeredSlides: true,
	speed: 600,
	spaceBetween: 0,
	loop: true,

	// clickable: true,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
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


const swiperTalks = {
	slidesPerView: "auto",
	centeredSlides: false,
	speed: 600,
	spaceBetween: 24,
	// initialSlide: 1,
	navigation: {
		nextEl: document.querySelector('.five-next'),
		prevEl: document.querySelector('.five-prev'),
	},
}

export {
	swiperTalks,
	swiperHome
};