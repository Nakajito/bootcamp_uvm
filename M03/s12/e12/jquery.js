// Función para obtener usuarios y mostrarlos en la página
function fetchUsers() {
    const userList = $('#userList');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Realizar la solicitud GET con jQuery
    $.get(apiUrl)
        .done(users => {
            // Iterar sobre los usuarios y agregarlos al DOM
            users.forEach(user => {
                const userDiv = $('<div>').addClass('user');

                // Crear los elementos para el nombre, usuario y correo
                const userName = $('<h3>').text(user.name);
                const userUsername = $('<p>').text(`Usuario: ${user.username}`);
                const userEmail = $('<p>').text(`Correo: ${user.email}`);

                // Agregar los elementos al div del usuario
                userDiv.append(userName, userUsername, userEmail);

                // Agregar el div al contenedor principal
                userList.append(userDiv);
            });
        })
        .fail(error => {
            console.error('Error al obtener usuarios:', error);
            userList.html('<p>Error al cargar los usuarios.</p>');
        });
}

// Llamar a la función para obtener usuarios cuando el DOM esté listo
$(document).ready(() => {
    fetchUsers();
});
