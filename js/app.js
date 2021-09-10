const menuBtn = document.querySelector('.js--menuBtn');
const menu = document.querySelector('.js--menu');
const menuHeadings = document.querySelectorAll('.js--menuHeading');
const submenus = document.querySelectorAll('.js--submenu');
let isMenuOpen = false;

window.addEventListener('click', e => {
    if (e.target === menuBtn) {
        if (!isMenuOpen) {
            showMenu();
            return
        }
        hideMenu();
    } else {
        if (!menu.contains(e.target)) {
            hideMenu();
        }
    }
});


for (let i = 0; i < menuHeadings.length; i++) {
    menuHeadings[i].addEventListener('click', () => {
        menuHeadings[i].classList.toggle('reversed');
        for (const submenu of submenus) {
            if (submenu !== submenus[i]) {
                submenu.classList.add('hide');
            }
        }

        for (const heading of menuHeadings) {
            if (heading !== menuHeadings[i]) {
                heading.classList.remove('reversed');
            }
        }

        submenus[i].classList.toggle('hide');
    });
}

function showMenu() {
    menuBtn.src = './images/icon-close.svg';
    menuBtn.alt = 'close menu';
    menu.classList.remove('hide');
    isMenuOpen = true;
}

function hideMenu() {
    menuBtn.src = './images/icon-hamburger.svg';
    menuBtn.alt = 'open menu';
    menu.classList.add('hide');

    for (const submenu of submenus) {
        submenu.classList.add('hide');
    }

    for (const heading of menuHeadings) {
        heading.classList.remove('reversed');
    }

    isMenuOpen = false;
}