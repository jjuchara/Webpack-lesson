
import '../../button.css'

	const body = document.querySelector('body');
	const btn = document.createElement('button');
	btn.classList.add('button');
	body.appendChild(btn);

	const declOfNum = (n, titles) => {
		return titles[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
	};

	let count = 0;

	btn.addEventListener('click', e => {
		count += 1;
		btn.innerHTML = `${count} ${declOfNum(count, ['клик', 'клика', 'кликов'])}`;
	});



