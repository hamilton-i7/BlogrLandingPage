const menuBtn = document.querySelector('.js--menuBtn');
const menu = document.querySelector('.js--menu');
const menuHeadings = document.querySelectorAll('.js--menuHeading');
const menuHeadingIcons = document.querySelectorAll('.js--menuHeadingIcon');
const submenus = document.querySelectorAll('.js--submenu');
let menuOpen = false;

window.addEventListener('click', e => {
    if (menuBtn.contains(e.target)) {
        !menuOpen ? showMenu() : hideMenu();
    } else {
        if (!menu.contains(e.target)) {
            hideMenu();
        }
    }
});


for (let i = 0; i < menuHeadings.length; i++) {
    menuHeadings[i].addEventListener('click', () => {
        menuHeadings[i].classList.toggle('expanded');
        menuHeadingIcons[i].classList.toggle('expanded');

        for (const submenu of submenus) {
            if (submenu !== submenus[i]) {
                submenu.classList.remove('open');
            }
        }

        for (const heading of menuHeadings) {
            if (heading !== menuHeadings[i]) {
                heading.classList.remove('expanded');
            }
        }

        for (const headingIcon of menuHeadingIcons) {
            if (headingIcon !== menuHeadingIcons[i]) {
                headingIcon.classList.remove('expanded');
            }
        }
        submenus[i].classList.toggle('open');
    });
}

function showMenu() {
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
}

function hideMenu() {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');

    for (const submenu of submenus) {
        submenu.classList.remove('open');
    }

    for (const heading of menuHeadings) {
        heading.classList.remove('expanded');
    }

    menuOpen = false;
}