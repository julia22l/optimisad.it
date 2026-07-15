(function () {
	var form = document.getElementById('contact_form');
	if (!form) return;

	var submitBtn = form.querySelector('button[type="submit"]');
	var btnTitle = submitBtn.querySelector('.btn-title');
	var btnTitleOriginalText = btnTitle.textContent;

	var resultBox = document.createElement('div');
	resultBox.id = 'form-result';
	resultBox.style.display = 'none';
	resultBox.style.marginBottom = '20px';
	submitBtn.parentNode.insertBefore(resultBox, submitBtn);

	function showResult(message, isSuccess) {
		resultBox.textContent = message;
		resultBox.className = 'alert ' + (isSuccess ? 'alert-success' : 'alert-danger');
		resultBox.style.display = 'block';
	}

	var recaptchaSitekey = form.dataset.recaptchaSitekey;
	var recaptchaResponseField = form.querySelector('#g-recaptcha-response');

	function submitForm() {
		var formData = new FormData(form);

		return fetch(form.action, {
			method: 'POST',
			body: formData,
			headers: { Accept: 'application/json' }
		})
			.then(function (response) { return response.json(); })
			.then(function (data) {
				if (data.success) {
					showResult('Grazie! Il tuo messaggio è stato inviato. Ti risponderò entro 24–48 ore.', true);
					form.reset();
				} else {
					showResult("Si è verificato un errore nell'invio. Riprova o scrivimi direttamente a info@optimisad.it.", false);
				}
			})
			.catch(function () {
				showResult("Si è verificato un errore nell'invio. Riprova o scrivimi direttamente a info@optimisad.it.", false);
			})
			.finally(function () {
				submitBtn.disabled = false;
				btnTitle.textContent = btnTitleOriginalText;
			});
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		submitBtn.disabled = true;
		btnTitle.textContent = 'Invio in corso...';

		if (recaptchaSitekey && typeof grecaptcha !== 'undefined') {
			grecaptcha.ready(function () {
				grecaptcha.execute(recaptchaSitekey, { action: 'submit' })
					.then(function (token) {
						recaptchaResponseField.value = token;
						submitForm();
					})
					.catch(submitForm);
			});
		} else {
			submitForm();
		}
	});
})();
