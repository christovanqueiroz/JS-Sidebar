const closeSideBar = document.querySelector('.menu');
const itemName = document.querySelectorAll('.title');
const logo = document.querySelectorAll('.logo');
const icon = document.querySelectorAll('.icon');
const drawer = document.getElementById('drawer');
let menuClosed = true;
const navItem = document.querySelectorAll('aside section nav ul li')
let navItemSelected = true;

const handleToggleDrawer = () => {
    if(menuClosed) {
        drawer.classList.add("menuClosed");
        itemName.forEach(item => item.classList.add('hide'));
        logo.forEach(item => item.classList.add('hide'));
        icon.forEach(item => item.style.paddingLeft = '0.4em');
        menuClosed = false;
    } else {
        drawer.classList.remove("menuClosed");
        itemName.forEach(item => item.classList.remove('hide'));
        logo.forEach(logos => logos.classList.remove('hide'));
        icon.forEach(item => item.style.paddingLeft = '0.8em');
        menuClosed = true;
    }
}

closeSideBar.addEventListener('click', handleToggleDrawer);

const selectNavItem = () => {
    if(navItemSelected) {
        navItem.forEach(item => item.classList.toggle('selected'));
        navItemSelected = true;
    }
}

navItem.forEach(item => item.addEventListener('click', selectNavItem))