const apiUrl = "https://rickandmortyapi.com/api/character";

// Obtener los personajes de la API y mostrarlos en la página
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

// Llamar a la función para obtener los personajes
fetchCharacters();