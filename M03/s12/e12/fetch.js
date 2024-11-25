// Función para obtener usuarios y mostrarlos en la página
function fetchUsers() {
    const userList = document.getElementById('userList');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Realizar la solicitud GET con Fetch API
    fetch(apiUrl)
        .then(response => {
            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            // Iterar sobre los usuarios y agregarlos al DOM
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.classList.add('user');

                // Crear los elementos para el nombre, usuario y correo
                const userName = document.createElement('h3');
                userName.textContent = user.name;

                const userUsername = document.createElement('p');
                userUsername.textContent = `Usuario: ${user.username}`;

                const userEmail = document.createElement('p');
                userEmail.textContent = `Correo: ${user.email}`;

                // Agregar los elementos al div del usuario
                userDiv.appendChild(userName);
                userDiv.appendChild(userUsername);
                userDiv.appendChild(userEmail);

                // Agregar el div al contenedor principal
                userList.appendChild(userDiv);
            });
        })
        .catch(error => {
            console.error('Error al obtener usuarios:', error.message);
            userList.innerHTML = '<p>Error al cargar los usuarios.</p>';
        });
}

// Llamar a la función para obtener usuarios
fetchUsers();