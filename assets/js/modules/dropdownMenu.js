import outSideClick from "./outsideClick.js"

export default function initDropdownMenu() {
	const dropdownMenus = document.querySelectorAll("[data-dropdown]");
	const mobile = window.matchMedia("(max-width: 1020px)").matches;

	dropdownMenus.forEach((menu) => {
		["click"].forEach((userEvent) => {
			menu.addEventListener(userEvent, handleClick);
		});
	});

	function handleClick(event) {
		if (!mobile) {
			// event.preventDefault(); //retirar se tiver click no item
			this.classList.add("active");
			outSideClick(this, ["click", "mouseleave"], () => {
				this.classList.remove("active");
			});
		} else {
			event.currentTarget.classList.toggle("active");
		}
	}
}
