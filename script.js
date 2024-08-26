const themeToggle = document.getElementById('theme-toggle')
const body = document.body

themeToggle.addEventListener('click', () => {
	body.classList.toggle('light')
	if (body.classList.contains('light')) {
		themeToggle.querySelector('.sun').style.backgroundColor = '#ffcc00'
		themeToggle.querySelector('.moon').style.backgroundColor = '#121212'
	} else {
		themeToggle.querySelector('.sun').style.backgroundColor = '#121212'
		themeToggle.querySelector('.moon').style.backgroundColor = '#ffcc00'
	}
})
