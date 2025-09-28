const burger = document.querySelector('.navbar__burger');
const overlay = document.querySelector('.navbar__overlay');

function initNav() {
    const isMobile = window.innerWidth <= 900;
    const navbarLinks = document.querySelector('.navbar__links');
    const navbarExtras = document.querySelector('.navbar__extras');
    let menu = document.getElementById('navbar-menu');
    const navbarContainer = document.querySelector('.navbar__container');

    if (isMobile) {
        if (!menu) {
            menu = document.createElement('div');
            menu.className = 'navbar__menu';
            menu.id = 'navbar-menu';
            navbarContainer.appendChild(menu);
        }
        if (!menu.contains(navbarLinks)) menu.appendChild(navbarLinks);
        if (!menu.contains(navbarExtras)) menu.appendChild(navbarExtras);
    }
}

function openNav() {
    document.body.classList.add('nav-open');
    burger.setAttribute('aria-expanded', 'true');
}
function closeNav() {
    document.body.classList.remove('nav-open');
    burger.setAttribute('aria-expanded', 'false');
}
function toggleNav() {
    if (document.body.classList.contains('nav-open')) closeNav();
    else openNav();
}

window.addEventListener('DOMContentLoaded', () => {
    initNav();
    const menu = document.getElementById('navbar-menu');
    if (menu) {
        const links = menu.querySelectorAll('a');
        links.forEach(l => l.addEventListener('click', closeNav));
    }
});
window.addEventListener('resize', initNav);

burger.addEventListener('click', toggleNav);
overlay.addEventListener('click', closeNav);
