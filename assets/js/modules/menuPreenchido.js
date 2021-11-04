export default function menuPreenchido() {
	const body = document.body
	if (window.pageYOffset >= 170) body.classList.add("ativo--scroll");
	else if (window.pageYOffset < 180) body.classList.remove("ativo--scroll");
}

