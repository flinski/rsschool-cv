'use strict'

// ===========================================================
// splash screen
// ===========================================================

// const splashScreen = document.querySelector('.splash-screen')
// const splashScreenText = document.querySelector('.splash-screen__text')

// window.addEventListener('DOMContentLoaded', () => {
// 	setTimeout(() => {
// 		splashScreenText.classList.add('on')

// 		setTimeout(() => {
// 			splashScreenText.classList.add('off')

// 			setTimeout(() => {
// 				splashScreen.classList.add('off')
// 			}, 1000)
// 		}, 2000)
// 	}, 0)
// })

// ===========================================================
// scroll
// ===========================================================

const navButtons = document.querySelectorAll('.header__button')
const header = document.querySelector('.header')

function getCoords(elem) {
	let rect = elem.getBoundingClientRect()

	return {
		top: rect.top + window.scrollY,
		right: rect.right + window.scrollX,
		bottom: rect.bottom + window.scrollY,
		left: rect.left + window.scrollX,
	}
}

navButtons.forEach((navButton) => {
	const id = navButton.getAttribute('href').slice(1)

	navButton.addEventListener('click', (e) => {
		e.preventDefault()

		const section = document.getElementById(id)
		const coords = getCoords(section)

		window.scrollTo({
			top: coords.top - header.offsetHeight,
			left: 0,
			behavior: 'smooth',
		})
	})
})

// ===========================================================
