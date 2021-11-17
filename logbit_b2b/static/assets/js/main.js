import initDropdownMenu from "./modules/dropdownMenu.js"
import menuPreenchido from "./modules/menuPreenchido.js"
import puxaArquivoEappend from "./modules/puxaArquivoEappend.js"
import menu from "./modules/menu.js"
import mudaAtivoNoHover from "./modules/mudaAtivoHover.js";
import calendar from "./modules/calendar.js";
import { swiperHome, swiperTalks } from "./modules/swiper-props.js"
import infinitoScroll from "./modules/infinitoScroll.js";
import magnetizeEl from "./modules/magnetize.js";

const body = document.body
const mobile = window.matchMedia("(max-width: 1020px)").matches;

//PAGES
const pageHome = document.querySelector(".page--home")
const pageNoticias = document.querySelector(".page--noticias")
const pagePost = document.querySelector(".page--post")
const pageBiblioteca = document.querySelector(".page--biblioteca")
const pageBibliotecaSingle = document.querySelector(".page--biblioteca_single")



//VERIFICATION 
if (pageHome) {
	body.classList.add("body--home")

	mudaAtivoNoHover('.two--item')
	calendar()
	magnetizeEl()

	new Swiper('.one .swiper', swiperHome)
	new Swiper('.five--swiper', swiperTalks)
	mobile ? new Swiper('.six--swiper', swiperTalks) : ""

}

else if (pageNoticias) {
	body.classList.add("body--noticias")
	infinitoScroll('.content--wrapper', '.two--item')

}

else if (pagePost) {
	body.classList.add("body--post")
	new Swiper('.two--swiper', swiperTalks)

}

else if (pageBiblioteca) {
	body.classList.add("body--biblioteca")
	infinitoScroll('.two--wrapper', '.two--item')


}

else if (pageBibliotecaSingle) {
	body.classList.add("body--biblioteca_single")
	infinitoScroll('.two--wrapper', '.two--item')


}
/*
//chama MENU e FOOTER
(async function init() {
	await puxaArquivoEappend('.menu--container', "./menu.html")
	await puxaArquivoEappend('.footer--container', "./footer.html")
	menu()
	initDropdownMenu();
	menuPreenchido();
	new Swiper('.mega--menu--swiper', swiperTalks)
})()
*/


// EVENTOS 🧙‍♂️
document.addEventListener("scroll", menuPreenchido);
document.addEventListener("DOMContentLoaded", () => body.classList.add("DOMContentLoaded"))


