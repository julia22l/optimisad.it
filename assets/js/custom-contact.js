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

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		if (form.querySelector('.g-recaptcha') && typeof grecaptcha !== 'undefined' && !grecaptcha.getResponse()) {
			showResult('Conferma di non essere un robot prima di inviare il modulo.', false);
			return;
		}

		submitBtn.disabled = true;
		btnTitle.textContent = 'Invio in corso...';

		var formData = new FormData(form);

		fetch(form.action, {
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
				if (form.querySelector('.g-recaptcha') && typeof grecaptcha !== 'undefined') {
					grecaptcha.reset();
				}
			});
	});
})();
