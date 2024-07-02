'use strict'

function createStars() {
	const stars = document.getElementById('stars')
	const numStars = 1000

	for (let i = 0; i < numStars; i++) {
		const star = document.createElement('div')
		const starSize = Math.random() * 2

		star.classList.add('star')

		star.style.width = `${starSize}px`
		star.style.top = `${Math.random() * 100}%`
		star.style.left = `${Math.random() * 100}%`
		star.style.animationDelay = `${Math.random() * 3}s`

		stars.append(star)
	}
}

document.addEventListener('DOMContentLoaded', createStars)
