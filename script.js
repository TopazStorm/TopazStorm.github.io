// Get the menu icon and menu elements
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the "active" class on the menu element
    menu.classList.toggle('active');
});