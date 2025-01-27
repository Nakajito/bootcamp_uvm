const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = 3000;
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));


// Configuración para servir archivos estáticos y vistas
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Ruta principal
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        res.render('index', { users });
    } catch (error) {
      console.error('Error al obtener los usuarios:', error.message); // Muestra el mensaje de error
        res.status(500).send(`Hubo un error al obtener los datos: ${error.message}`);
    }
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
