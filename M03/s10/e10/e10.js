// URL de la API pública
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Función para realizar el llamado a la API
async function fetchData() {
    try {
        // Llamada a la API usando fetch
        const response = await fetch(apiURL);

        // Verifica si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convertir la respuesta en formato JSON
        const data = await response.json();

        // Imprimir los datos en la consola
        for (const element of data) {
            console.log(`Usuario: ${element.username} \nEmail: ${element.email}`);
        }
        // console.log('Datos obtenidos de la API:', data);
    } catch (error) {
        // Manejo de errores
        console.error('Hubo un problema al realizar el llamado:', error);
    }
}

// Ejecutar la función para obtener los datos
fetchData();


// Función que imprime un mensaje después de cierto tiempo
function delayedMessage(message, delay) {
    console.log(`El mensaje aparecerá después de ${delay / 1000} segundos...`);
    
    // Usar la Web API setTimeout para esperar el tiempo especificado
    setTimeout(() => {
        console.log(message);
    }, delay);
}

// Llamar a la función con un mensaje y un tiempo de espera de 5 segundos
delayedMessage("Mensaje de espera!", 5000);
