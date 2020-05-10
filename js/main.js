const menuToggler = document.querySelector('.menu-toggle');
const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-times');

const menu = document.querySelector('.nav-list');
const navBackground = document.querySelector('.nav-background');

menuToggler.addEventListener('click', function () {
    openMenu.classList.toggle('hide');
    closeMenu.classList.toggle('hide');

    if (openMenu.classList.contains('hide')) {
        menu.classList.remove('hideMenu')
        navBackground.classList.remove('hideMenu')
    } else {
        menu.classList.add('hideMenu')
        navBackground.classList.add('hideMenu')

    }
});