const gameLinks = document.querySelectorAll('.game-link');
const gameNameElement = document.getElementById('game-name');
const contentElement = document.querySelector('.content');

gameLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const selectedGame = link.getAttribute('data-game');
        gameNameElement.textContent = selectedGame;

        // Load content from the linked page using Fetch API
        fetch(link.href)
            .then(response => response.text())
            .then(data => {
                // Extract title, body, and links from fetched content
                const parser = new DOMParser();
                const parsedContent = parser.parseFromString(data, 'text/html');
                const title = parsedContent.querySelector('title').textContent;
                const bodyText = parsedContent.querySelector('h2').textContent;
                const linkPlaceholders = parsedContent.querySelectorAll('.links a');

                // Update content on main page
                contentElement.innerHTML = `<h2>${title}</h2><p>${bodyText}</p>`;
                const linksContainer = contentElement.appendChild(document.createElement('div'));
                linksContainer.classList.add('links');
                linkPlaceholders.forEach(placeholder => {
                    linksContainer.appendChild(placeholder.cloneNode(true));
                });
            })
            .catch(error => {
                console.error('Error fetching content:', error);
                contentElement.innerHTML = 'Error loading content.';
            });
    });
});
