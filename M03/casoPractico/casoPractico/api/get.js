const apiUrl = "https://rickandmortyapi.com/api/character";

function fetchCharacters() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const characterList = document.getElementById('characterList');
            data.results.forEach((character) => {
                const characterCard = document.createElement('div');
                characterCard.classList.add('character-card');
                characterCard.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <div class="character-name">${character.name}</div>
                    <div class="character-species">${character.species}</div>
                    <div class="character-status">${character.status}</div>
                `;
                characterList.appendChild(characterCard);
            });
        })
        .catch((error) => {
            console.error("Error al obtener los datos:", error.message);
        });
}

document.getElementById('goBack').addEventListener('click', () => {
    window.history.back();
});

fetchCharacters();