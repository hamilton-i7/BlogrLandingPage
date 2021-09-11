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

        for (let j = 0; j < submenus.length; j++) {
            if (submenus[j] !== submenus[i]) {
                submenus[j].classList.remove('open');
            }

            if (menuHeadings[j] !== menuHeadings[i]) {
                menuHeadings[j].classList.remove('expanded');
            }

            if (menuHeadingIcons[j] !== menuHeadingIcons[i]) {
                menuHeadingIcons[j].classList.remove('expanded');
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

    for (let i = 0; i < submenus.length; i++) {
        submenus[i].classList.remove('open');
        menuHeadings[i].classList.remove('expanded');
        menuHeadingIcons[i].classList.remove('expanded');
    }
    menuOpen = false;
}