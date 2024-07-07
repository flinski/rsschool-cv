'use strict'

// ===========================================================
// scroll
// ===========================================================

const navButtons = document.querySelectorAll('.header__button')
const header = document.querySelector('.header')

function getCoords(elem) {
	const rect = elem.getBoundingClientRect()

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
// TOGGLE THEME
// ===========================================================

const toggleTheme = document.querySelector('.toggle-theme')

toggleTheme.addEventListener('click', () => {
	const html = document.documentElement

	const moon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M13.9999 8.52667C13.8951 9.66147 13.4692 10.7429 12.7721 11.6445C12.075 12.5461 11.1356 13.2305 10.0637 13.6177C8.99188 14.0049 7.83192 14.0787 6.7196 13.8307C5.60728 13.5827 4.5886 13.023 3.78275 12.2172C2.97691 11.4113 2.41723 10.3927 2.16921 9.28033C1.92118 8.16801 1.99508 7.00806 2.38224 5.9362C2.7694 4.86434 3.45382 3.92491 4.35541 3.22784C5.257 2.53076 6.33847 2.10487 7.47327 2C6.80888 2.89884 6.48917 4.0063 6.57229 5.12094C6.65541 6.23559 7.13584 7.28337 7.9262 8.07373C8.71656 8.86409 9.76435 9.34452 10.879 9.42765C11.9936 9.51077 13.1011 9.19106 13.9999 8.52667Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</svg>`
	const sun = `			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_77_49)">
	<path d="M8.00008 11.3333C9.84103 11.3333 11.3334 9.84094 11.3334 7.99999C11.3334 6.15904 9.84103 4.66666 8.00008 4.66666C6.15913 4.66666 4.66675 6.15904 4.66675 7.99999C4.66675 9.84094 6.15913 11.3333 8.00008 11.3333Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M8 0.666656V1.99999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M8 14V15.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M2.81323 2.81332L3.7599 3.75999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M12.24 12.24L13.1867 13.1867" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M0.666748 8H2.00008" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M14 8H15.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M2.81323 13.1867L3.7599 12.24" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M12.24 3.75999L13.1867 2.81332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	</g>
	<defs>
	<clipPath id="clip0_77_49">
	<rect width="16" height="16" fill="white"/>
	</clipPath>
	</defs>
	</svg>`

	html.classList.toggle('light-theme')

	if (html.classList.contains('light-theme')) {
		toggleTheme.innerHTML = ''
		toggleTheme.insertAdjacentHTML('beforeend', moon)
	} else {
		toggleTheme.innerHTML = ''
		toggleTheme.insertAdjacentHTML('beforeend', sun)
	}
})
