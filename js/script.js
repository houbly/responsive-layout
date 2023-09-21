window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  setTimeout(() => {
    if(loader) {
      loader.classList.remove('active');
      loader.addEventListener('transitionend', () => {
        loader.remove();
      })
    }
  }, 1500);

});

const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
	body.classList.toggle('nav-open');
});