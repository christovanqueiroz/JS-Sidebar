const openSideBar = document.querySelector('.menu');
const itemName = document.querySelectorAll('.title');
const logo = document.querySelectorAll('.logo');
const icon = document.querySelectorAll('.icon');
const drawer = document.getElementById('drawer');
let isMenuClosed = true;

const handleToggleDrawer = () => {
    if(isMenuClosed) {
        drawer.classList.add("isMenuClosed");
        itemName.forEach(item => item.classList.add('hide'));
        logo.forEach(item => item.classList.add('hide'));
        icon.forEach(item => item.style.paddingLeft = '0.4em');
        isMenuClosed = false;
    } else {
        drawer.classList.remove("isMenuClosed");
        itemName.forEach(item => item.classList.remove('hide'));
        logo.forEach(logos => logos.classList.remove('hide'));
        icon.forEach(item => item.style.paddingLeft = '0.8em');
        isMenuClosed = true;
    }
}

openSideBar.addEventListener('click', handleToggleDrawer)
/*    if(isMenuOpen === true) {
    itemName.forEach(item => {
        openSideBar.addEventListener('click', () => {
            item.classList.add("hide");
        })
    })
    
    logo.forEach(i => {
        openSideBar.addEventListener('click', () =>{
            i.classList.add("hide");
        })
    })
    
    icon.forEach(i => {
        openSideBar.addEventListener('click', () => {
            i.style.paddingLeft = '0.4em';
        })
    })
    
    openSideBar.addEventListener('click', function(){
        document.querySelector('aside').classList.add("isMenuOpen");
        isMenuOpen = true;
    })    
} else if(isMenuOpen === false) {
    itemName.forEach(item => {
        openSideBar.addEventListener('click', () => {
            item.classList.remove("hide");
        })
    })
    
    logo.forEach(i => {
        openSideBar.addEventListener('click', () =>{
            i.classList.remove("hide");
        })
    })
    
    icon.forEach(i => {
        openSideBar.addEventListener('click', () => {
            i.style.paddingLeft = '0.8rem';
        })
    })
    
    openSideBar.addEventListener('click', function(){
        document.querySelector('aside').classList.remove("isMenuOpen");
        isMenuOpen = false;
    })
}

console.log(isMenuOpen) */