const burger = (menuSelector, burgerSelector) => {
	const menuElem = document.querySelector(menuSelector),
		burgerElem = document.querySelector(burgerSelector);

	menuElem.classList.remove('open')
	document.body.classList.remove('no-scroll');

	document.querySelectorAll('.navbar__el').forEach((i) => {
		i.addEventListener('click', (e) => {
			if (menuElem.classList.contains('open')) {
				menuElem.classList.remove('open')
				document.body.classList.remove('no-scroll');
			}
		})
	})

	burgerElem.addEventListener('click', () => {
		if (menuElem.classList.contains('open')) {
			menuElem.classList.remove('open')
			document.body.classList.remove('no-scroll');
		} else {
			menuElem.classList.add('open');
			document.body.classList.add('no-scroll');
		}
	});

	window.addEventListener('resize', function () {
		if (window.innerWidth > 1023) {
			menuElem.classList.remove('open')
			document.body.classList.remove('no-scroll');
		}
	});
};

export default burger;