import initDropdownMenu from "./modules/dropdownMenu.js"
import menuPreenchido from "./modules/menuPreenchido.js"
import puxaArquivoEappend from "./modules/puxaArquivoEappend.js"
import menu from "./modules/menu.js"
import mudaAtivoNoHover from "./modules/mudaAtivoHover.js";
import calendar from "./modules/calendar.js";
import { swiperHome, swiperTalks } from "./modules/swiper-props.js"

const body = document.body
const mobile = window.matchMedia("(max-width: 1020px)").matches;

//PAGES
const pageHome = document.querySelector(".page--home")
const pageNoticias = document.querySelector(".page--noticias")
const pagePost = document.querySelector(".page--post")





//VERIFICATION
if (pageHome) {
	body.classList.add("body--home")

	mudaAtivoNoHover('.two--item')
	calendar()

	new Swiper('.one .swiper', swiperHome)
	new Swiper('.five--swiper', swiperTalks)
	mobile ? new Swiper('.six--swiper', swiperTalks) : ""

} else if (pageNoticias) {
	body.classList.add("body--noticias")

} else if (pagePost) {
	body.classList.add("body--post")
	new Swiper('.two--swiper', swiperTalks)

}





//chama MENU e FOOTER
(async function init() {
	await puxaArquivoEappend('.menu--container', "./menu.html")
	await puxaArquivoEappend('.footer--container', "./footer.html")
	menu()
	initDropdownMenu();
	menuPreenchido();
	new Swiper('.mega--menu--swiper', swiperTalks)
})()





// EVENTOS 🧙‍♂️
document.addEventListener("scroll", menuPreenchido);
document.addEventListener("DOMContentLoaded", () => body.classList.add("DOMContentLoaded"))



var cerchio = document.querySelectorAll('.magnetic');

cerchio.forEach(function (elem) {
	$(document).on('mousemove touch', function (e) {
		magnetize(elem, e);
	});
})
function magnetize(el, e) {
	var mX = e.pageX,
		mY = e.pageY;
	const item = $(el);

	const customDist = item.data('dist') * 5 || 80;
	const centerX = item.offset().left + (item.width() / 2);
	const centerY = item.offset().top + (item.height() / 2);

	var deltaX = Math.floor((centerX - mX)) * -0.45;
	var deltaY = Math.floor((centerY - mY)) * -0.45;

	var distance = calculateDistance(item, mX, mY);

	if (distance < customDist) {
		gsap.to(item, 1, {
			y: deltaY,
			x: deltaX,
			scale: 1.05
		});
		item.addClass('magnet');
	} else {
		gsap.to(item, 0.6, {
			y: 0,
			x: 0,
			scale: 1
		});
		item.removeClass('magnet');
	}
}

function calculateDistance(elem, mouseX, mouseY) {
	return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}


function lerp(a, b, n) {
	return (1 - n) * a + n * b
}