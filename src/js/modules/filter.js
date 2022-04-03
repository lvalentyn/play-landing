const filter = () => {
	const tabContent = document.querySelectorAll('.js-filter-content'),
		tabsWrapper = document.querySelector('.js-filter-menu'),
		tabs = document.querySelectorAll('.js-filter-tab');
	function hideContent() {
		tabContent.forEach(i => {
			i.classList.add('hide');
			i.classList.remove('show', 'fade');
		})
		tabs.forEach(i => {
			i.classList.remove('active');
		})
	}
	function showContent(i = 0) {
		tabContent[i].classList.remove('hide');
		tabContent[i].classList.add('show', 'fade');
		tabs[i].classList.add('active');
	}
	hideContent();
	showContent();
	tabsWrapper.addEventListener('click', (e) => {
		let target = e.target;
		if (target && target.matches('.js-filter-tab')) {
			tabs.forEach((item, index) => {
				if (target == item) {
					hideContent();
					showContent(index);
				}
			})
		}
	});

};

export default filter;