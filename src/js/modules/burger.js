const burger = (menuSelector, burgerSelector) => {
	const menuElem = document.querySelector(menuSelector),
		burgerElem = document.querySelector(burgerSelector);

	menuElem.classList.remove('open');

	burgerElem.addEventListener('click', () => {
		if (menuElem.classList.contains('open')) {
			menuElem.classList.remove('open')
		} else {
			menuElem.classList.add('open');
		}
	});

	// window.addEventListener('resize', () => {
	// 	if (window.screen.availWidth > 1023) {
	// 		menuElem.classList.remove('open');
	// 	}
	// });
};

export default burger;