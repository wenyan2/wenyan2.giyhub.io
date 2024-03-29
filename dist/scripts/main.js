// responsive menu
const burgerMenu = document.querySelector('.responsiveMenu')
const buttonMenu = document.querySelector('.hamburger')

buttonMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('isActive')
    buttonMenu.classList.toggle('is-active')
})
