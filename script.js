const closeSideBar = document.querySelector('.menu');
const itemName = document.querySelectorAll('.title');
const logo = document.querySelectorAll('.logo');
const icon = document.querySelectorAll('.icon');
const drawer = document.getElementById('drawer');
let menuClosed = true;

const navItems = document.querySelectorAll('aside section nav ul li')
const mainSearch = document.getElementById('mainSearch')
const mainDashboard = document.getElementById('mainDashboard')
const mainPets = document.getElementById('mainPets')
const mainClients = document.getElementById('mainClients')
const mainVets = document.getElementById('mainVets')
const mainSettings = document.getElementById('mainSettings')

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

function navItemSelectedOne() {
    document.getElementById('navSearch').classList.add("selected");
    document.getElementById('navDashboard').classList.remove("selected");
    document.getElementById('navPets').classList.remove("selected");
    document.getElementById('navClients').classList.remove("selected");
    document.getElementById('navVets').classList.remove("selected");
    document.getElementById('navSettings').classList.remove("selected");
    mainSearch.classList.remove('hide');
    mainDashboard.classList.add('hide');
    mainPets.classList.add('hide');
    mainClients.classList.add('hide');
    mainVets.classList.add('hide');
    mainSettings.classList.add('hide');
}

function navItemSelectedTwo() {
    document.getElementById('navDashboard').classList.add("selected");
    document.getElementById('navSearch').classList.remove("selected");
    document.getElementById('navPets').classList.remove("selected");
    document.getElementById('navClients').classList.remove("selected");
    document.getElementById('navVets').classList.remove("selected");
    document.getElementById('navSettings').classList.remove("selected");
    mainSearch.classList.add('hide');
    mainDashboard.classList.remove('hide');
    mainPets.classList.add('hide');
    mainClients.classList.add('hide');
    mainVets.classList.add('hide');
    mainSettings.classList.add('hide');
}

function navItemSelectedThree() {
    document.getElementById('navPets').classList.add("selected");
    document.getElementById('navSearch').classList.remove("selected");
    document.getElementById('navDashboard').classList.remove("selected");
    document.getElementById('navClients').classList.remove("selected");
    document.getElementById('navVets').classList.remove("selected");
    document.getElementById('navSettings').classList.remove("selected");
    mainSearch.classList.add('hide');
    mainDashboard.classList.add('hide');
    mainPets.classList.remove('hide');
    mainClients.classList.add('hide');
    mainVets.classList.add('hide');
    mainSettings.classList.add('hide');
}

function navItemSelectedFour() {
    document.getElementById('navClients').classList.add("selected");
    document.getElementById('navSearch').classList.remove("selected");
    document.getElementById('navDashboard').classList.remove("selected");
    document.getElementById('navPets').classList.remove("selected");
    document.getElementById('navVets').classList.remove("selected");
    document.getElementById('navSettings').classList.remove("selected");
    mainSearch.classList.add('hide');
    mainDashboard.classList.add('hide');
    mainPets.classList.add('hide');
    mainClients.classList.remove('hide');
    mainVets.classList.add('hide');
    mainSettings.classList.add('hide');
}

function navItemSelectedFive() {
    document.getElementById('navVets').classList.add("selected");
    document.getElementById('navSearch').classList.remove("selected");
    document.getElementById('navDashboard').classList.remove("selected");
    document.getElementById('navClients').classList.remove("selected");
    document.getElementById('navPets').classList.remove("selected");
    document.getElementById('navSettings').classList.remove("selected");
    mainSearch.classList.add('hide');
    mainDashboard.classList.add('hide');
    mainPets.classList.add('hide');
    mainClients.classList.add('hide');
    mainVets.classList.remove('hide');
    mainSettings.classList.add('hide');
}

function navItemSelectedSix() {
    document.getElementById('navSettings').classList.add("selected");
    document.getElementById('navSearch').classList.remove("selected");
    document.getElementById('navDashboard').classList.remove("selected");
    document.getElementById('navClients').classList.remove("selected");
    document.getElementById('navVets').classList.remove("selected");
    document.getElementById('navPets').classList.remove("selected");
    mainSearch.classList.add('hide');
    mainDashboard.classList.add('hide');
    mainPets.classList.add('hide');
    mainClients.classList.add('hide');
    mainVets.classList.add('hide');
    mainSettings.classList.remove('hide');
}