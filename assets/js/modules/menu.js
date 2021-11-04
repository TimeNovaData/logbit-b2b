export default function menu() {
	const mobile$ = window.matchMedia('(max-width: 1020px)').matches
	const toogle = document.querySelector(".menu--click")
	const fundoEscuro = document.querySelector(".fundo--escuro")
	const lista = document.querySelector(".menu--desktop .menu--list")
	// const menuBtn = document.querySelector(".menu--desktop .menu--btn").cloneNode(true)
	const listaClonada = lista.cloneNode("true")
	const menuMobile = document.querySelector(".menu--mobile")
	console.log("entrou")

	if (mobile$) {
		toogle.addEventListener("click", toogleMenu)
		fundoEscuro.addEventListener("click", toogleMenu)
		menuMobile.appendChild(listaClonada)
		// menuMobile.appendChild(menuBtn)
	}

	function toogleMenu(evt) {
		if (!document.body.classList.contains("menu__open")) {
			document.body.classList.toggle("menu--open")

		} else if (document.body.classList.toggle("menu--open")) {

			linksMenu.forEach((i) => {
				i.setAttribute(
					"style",
					"animation: voltaMenu 250ms both ease-out;"
				);
				setTimeout(() => {
					i.removeAttribute("style", "animation");
					document.body.classList.remove("menu__open");
				}, 250);
			})
		}
	}

	/* 	const pegaTamanho = (el) => document.querySelector(el).getBoundingClientRect().height */
	/* 	const setaVariavel = () => document.documentElement.style.setProperty("--menu--size",
			`${pegaTamanho(".menu")}px`)
		setaVariavel()

		window.addEventListener('resize', setaVariavel) */

}