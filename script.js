'use strict';
const amount = document.getElementById('amount');
const intrest = document.getElementById('intrest');
const months = document.getElementById('months');
const payment = document.getElementById('payment');
const body = document.querySelector('body');

body.addEventListener('click', function() {
	payment.value = (amount.value * intrest.value * months.value) / 100;

	if (amount.value >= 1 && intrest.value >= 1 && months.value >= 1) {
		payment.innerHTML = `<h3>Monthly Payment = ${payment.value}</h3>`;
	}
});
