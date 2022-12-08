const closeSideBar = document.querySelector('.menu');
const itemName = document.querySelectorAll('.title');
const logo = document.querySelectorAll('.logo');
const icon = document.querySelectorAll('.icon');
const drawer = document.getElementById('drawer');
let menuClosed = true;

const navItems = document.querySelectorAll('aside section nav ul li')

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


if(navItems.classList.contains("selected"))
function navItemSelectedOne() {
    document.getElementById('navSearch').classList.toggle("selected");
    document.navItems.siblings
}

function navItemSelectedTwo() {
    document.getElementById('navDashboard').classList.toggle("selected");
}

function navItemSelectedThree() {
    document.getElementById('navPets').classList.toggle("selected");
}

function navItemSelectedFour() {
    document.getElementById('navClients').classList.toggle("selected");
}

function navItemSelectedFive() {
    document.getElementById('navVets').classList.toggle("selected");
}

function navItemSelectedSix() {
    document.getElementById('navSettings').classList.toggle("selected");
}