'use strict'

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__nav')
burger.addEventListener('click', () =>
	menu.classList.add('open')
)
const btnClose = document.querySelector('.menu__nav .close-btn ')
btnClose.addEventListener('click', () =>
	menu.classList.remove('open')
)

const items = document.querySelectorAll('.menu__item')
items.forEach(item => item.addEventListener('click', () =>
	menu.classList.remove('open')
))

const searchForm = document.querySelector('.aside__form')
const main = document.querySelector('.posts__posts')
const aside = document.querySelector('.posts__aside')
const buttons = document.querySelectorAll('.features__item:not(.feature--selected) .btn')
const about = document.querySelector('.footer-list.about')
const footer = document.querySelector('.footer-main')
const social = document.querySelector('.footer-list.social')
const block = document.querySelector('.footer-block')


const handler = () => {
	if (document.body.clientWidth <= 835) {
		main.prepend(searchForm)
		buttons.forEach(button => {
			button.classList.remove('btn')
			button.classList.add('btn--alt')
		})
	}
	else {
		aside.prepend(searchForm)
		buttons.forEach(button => {
			button.classList.remove('btn--alt')
			button.classList.add('btn')
		})
	}
	if (document.body.clientWidth <= 1050) {
		footer.append(about)

	}
	else {
		block.insertBefore(about, social)

	}


}
window.addEventListener('resize',handler)
window.addEventListener('load',handler)