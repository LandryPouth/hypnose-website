let btnMenu = document.querySelector('.menu-burger');
let menu = document.querySelector('.liste-nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnMenu.classList.toggle('active');
})

let allLinks = document.querySelectorAll('.item-nav');

allLinks.forEach(item =>{

    item.addEventListener('click', () => {
        menu.classList.toggle('active');
        btnMenu.classList.toggle('active');
    })

})
