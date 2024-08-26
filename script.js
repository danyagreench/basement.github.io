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

window.addEventListener('scroll', () => {
	const rect = themeToggle.getBoundingClientRect()
	if (rect.top < 0) {
		themeToggle.style.position = 'fixed'
		themeToggle.style.bottom = '20px'
		themeToggle.style.right = '40px'
	} else {
		themeToggle.style.position = 'fixed'
		themeToggle.style.bottom = 'auto'
		themeToggle.style.right = '40px'
	}
})
