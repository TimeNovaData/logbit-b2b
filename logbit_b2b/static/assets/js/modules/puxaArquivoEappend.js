export default async function puxaArquivoEappend(cont, arquivo) {
	const container = document.querySelector(cont);
	const resposta = await fetch(arquivo)
	const html = await resposta.text()
	container.innerHTML = html

}