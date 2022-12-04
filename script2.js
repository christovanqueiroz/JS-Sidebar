const itemName = document.querySelectorAll('.title')

itemName.forEach(item => {
    item.addEventListener('click', () => {
        (item.querySelector('.menu')).style.display = 'none';
    })
})

console.log(itemName)