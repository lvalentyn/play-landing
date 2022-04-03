const accordion = (triggerSelector) => {
	const btns = document.querySelectorAll(triggerSelector);

	btns.forEach(btn => {
		btn.addEventListener('click', function () {
			this.classList.toggle('active');
			this.nextElementSibling.classList.toggle('active');

			if (this.classList.contains('active')) {
				this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
			} else {
				this.nextElementSibling.style.maxHeight = '0px';
			}
		});
	});
}
export default accordion;