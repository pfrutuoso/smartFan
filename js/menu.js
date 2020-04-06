const $menu = document.querySelector('.menuMobile')
const $btnMenuOpen = document.querySelector('.btnMenu__open')
const $btnMenuClose = document.querySelector('.btnMenu__close')

$btnMenuOpen.addEventListener('click', function() {
    $menu.classList.add('menu_open')
})

$btnMenuClose.addEventListener('click', function() {
    $menu.classList.remove('menu_open')
})