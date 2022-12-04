const openSideBar = document.querySelector('.menu')
const itemName = document.querySelectorAll('.title')
const logo = document.querySelectorAll('.logo')
const icon = document.querySelectorAll('.icon')

itemName.forEach(item => {
    openSideBar.addEventListener('click', () => {
        item.style.display = "none";
    })
})

logo.forEach(i => {
    openSideBar.addEventListener('click', () =>{
        i.style.display = "none";
    })
})

icon.forEach(i => {
    openSideBar.addEventListener('click', () => {
        i.style.paddingLeft = '0.4em';
    })
})

openSideBar.addEventListener('click', function(){
    document.querySelector('aside').style.maxWidth = '3.5em';
    document.querySelector('aside').style.alignItems = 'center';
    document.querySelector('footer').style.width = '100%';
    document.querySelector('footer').style.padding = '0'
})

