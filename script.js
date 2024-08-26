const themeToggle = document.getElementById('theme-toggle')
const body = document.body

let isDragging = false
let offsetX, offsetY

themeToggle.addEventListener('mousedown', e => {
	isDragging = true
	offsetX = e.clientX - themeToggle.offsetLeft
	offsetY = e.clientY - themeToggle.offsetTop
})

document.addEventListener('mousemove', e => {
	if (isDragging) {
		themeToggle.style.left = `${e.clientX - offsetX}px`
		themeToggle.style.top = `${e.clientY - offsetY}px`
	}
})

document.addEventListener('mouseup', () => {
	isDragging = false
})

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
