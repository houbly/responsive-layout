const key = document.getElementById('key');
const keyToggle = document.querySelector('.key-toggle');
const keyButtons = key.querySelectorAll('button');
const body = document.querySelector('body');
let keyIsActive = true;

const clearAllKeys = () => {
	keyButtons.forEach((button) => {
		button.classList.remove('active');
		body.classList.remove(`${button.dataset.tag}-active`);
	})
}

const setKeyIfActive = (isActive) => {
	if(isActive) {
		body.classList.add('key-active');
		keyToggle.innerHTML = 'Hide layout key';
		clearAllKeys();
	} else {
		body.classList.remove('key-active')
		keyToggle.innerHTML = 'Show layout key';
	}
}

setKeyIfActive(keyIsActive);

keyToggle.addEventListener('click', () => {
	keyIsActive = !keyIsActive;
	setKeyIfActive(keyIsActive);
})


keyButtons.forEach((button) => {
	button.addEventListener('click', () => {
		if (keyIsActive) {
			button.classList.toggle('active');
			body.classList.toggle(`${button.dataset.tag}-active`);
		}
	});
})
