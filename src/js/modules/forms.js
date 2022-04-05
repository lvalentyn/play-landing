const forms = () => {
	const form = document.querySelectorAll('form'),
		inputs = document.querySelectorAll('input');

	const message = {
		loading: 'Загрузка...',
		success: 'Спасибо!',
		failture: 'Что-то пошло не так...'
	};

	const postData = async (url, data) => {
		document.querySelector('.status').textContent = message.loading;
		let res = await fetch(url, {
			method: "POST",
			body: data
		});

		return await res.text();
	};

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = ''
		});
	};

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			if (!item.classList.contains('navbar__search')) {
				e.preventDefault();

				let statusMessage = document.createElement('div');
				statusMessage.classList.add('status');
				item.appendChild(statusMessage);

				const formData = new FormData(item);

				postData('../files/server.php', formData)
					.then(res => {
						console.log(res);
						statusMessage.textContent = message.success;
					})
					.catch(() => statusMessage.textContent = message.failture)
					.finally(() => {
						clearInputs();
						setTimeout(() => {
							statusMessage.remove()
							document.querySelectorAll('.js-modal').forEach(item => {
								item.style.display = 'none';
							});
							document.body.style.overflow = '';
						}, 4000);
					});
			}
		});

	});
};

export default forms;