// Add JavaScript functionality
const gameLinks = document.querySelectorAll('.game-list a');
const websiteTitle = document.getElementById('website-title');

gameLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const gameName = link.textContent;
        websiteTitle.textContent = gameName + " Guides";
        // You can also update the main content based on the clicked game here
    });
});

