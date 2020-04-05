const navMenu = document.querySelector('.navmenu');
const openMenuBtn = document.querySelector('.hamburger-btn');
const closeMenuBtn = document.querySelector('.close-btn');



openMenuBtn.addEventListener('click', () => {
    navMenu.style.opacity = '1';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
    navMenu.style.opacity = '0';
    openMenuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'hidden';
});