const openSideBar = document.querySelector('.menu');
const itemName = document.querySelectorAll('.title');
const logo = document.querySelectorAll('.logo');
const icon = document.querySelectorAll('.icon');
let isMenuOpen = true;

if(isMenuOpen = true) {
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
} else if(isMenuOpen = false) {
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

console.log(isMenuOpen)