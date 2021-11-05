import initDropdownMenu from "./modules/dropdownMenu.js"
import menuPreenchido from "./modules/menuPreenchido.js"
import puxaMenu from "./modules/puxaMenu.js"
import menu from "./modules/menu.js"
import mudaAtivoNoHover from "./modules/mudaAtivoHover.js";
import calendar from "./modules/calendar.js";
import { swiperHome, swiperTalks } from "./modules/swiper-props.js"

const body = document.body
const mobile = window.matchMedia("(max-width: 1020px)").matches;

//PAGES
const pageHome = document.querySelector(".page--home")


//VERIFICATION
if (pageHome) {
	(async function init() {
		await puxaMenu()
		menu()
		initDropdownMenu();
		menuPreenchido();

	})()

	mudaAtivoNoHover('.two--item')
	calendar()

	new Swiper('.one .swiper', swiperHome)
	new Swiper('.five--swiper', swiperTalks)
}







// FUNÇÕES INIT



// EVENTOS 🧙‍♂️
document.addEventListener("scroll", menuPreenchido);
document.addEventListener("DOMContentLoaded", () => body.classList.add("DOMContentLoaded"))

