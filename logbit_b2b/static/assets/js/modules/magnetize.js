export default function magnetizeEl() {

	var magneticsItems = document.querySelectorAll('.magnetic--container');
	magneticsItems.forEach((elem) => {
		$(document).on('mousemove touch', function (e) { magnetize(elem, e); });
	})


	function magnetize(el, e) {
		var mX = e.pageX,
			mY = e.pageY;
		const item = $(el);

		const customDist = item.data('dist') * 5 || 100;
		const centerX = item.offset().left + (item.width() / 2);
		const centerY = item.offset().top + (item.height() / 2);

		var deltaX = Math.floor((centerX - mX)) * -0.45;
		var deltaY = Math.floor((centerY - mY)) * -0.45;

		var distance = calculateDistance(item, mX, mY);

		if (distance < customDist) {
			gsap.to(item, 1, {
				y: deltaY,
				x: deltaX,
				scale: 1.1
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



}