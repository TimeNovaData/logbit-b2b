export default function mudaAtivoNoHover(els) {
	const items = document.querySelectorAll(`${els}`)
	const clearClass = () => items.forEach(item => item.classList.remove('active'))
	const addEvent = (el) => {
		el.addEventListener('mouseenter', () => {
			clearClass()
			el.classList.add('active')
		})
	}

	items.forEach(addEvent)

}