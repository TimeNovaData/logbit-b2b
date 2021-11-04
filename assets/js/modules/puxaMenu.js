export default async function puxaMenu() {
	const menuContainer = document.querySelector('.menu--container');
	const resposta = await fetch("menu.html")
	const html = await resposta.text()
	menuContainer.innerHTML = html

}