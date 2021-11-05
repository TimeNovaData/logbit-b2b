import initDropdownMenu from "./modules/dropdownMenu.js"
import menuPreenchido from "./modules/menuPreenchido.js"
import puxaMenu from "./modules/puxaMenu.js"
import menu from "./modules/menu.js"
// import * as swiperProps from "./modules/menu.js"

const body = document.body
const mobile = window.matchMedia("(max-width: 1020px)").matches;

//PAGES
const pageHome = document.querySelector(".page--home")


//VERIFICATION
if (pageHome) {
	async function init() {
		await puxaMenu()
		menu()
		initDropdownMenu();
		menuPreenchido();

	}
	init()
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
	new Swiper('.one .swiper', swiperHome)

}







// FUNÇÕES INIT



// EVENTOS 🧙‍♂️
document.addEventListener("scroll", menuPreenchido);
document.addEventListener("DOMContentLoaded", () => body.classList.add("DOMContentLoaded"))

