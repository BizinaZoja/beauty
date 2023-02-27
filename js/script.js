"use stirct";

window.addEventListener('DOMContentLoaded', () => {
    
    const burger = document.querySelector('.burger'),
          menuList = document.querySelector('.menu');


    burger.addEventListener('click', (e) => {
        e.preventDefault();
        menuList.classList.toggle('show-menu');
            
    });
    
    // function closeMenu() {
    //     burger.addEventListener('click', (e) => {
    //         e.preventDefault();

    //     })
}) 
