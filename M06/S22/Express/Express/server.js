const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors"); // Para permitir peticiones CORS desde el cliente

const app = express();
const PORT = 3000;

// Middleware CORS
app.use(cors());

// Endpoint que se conecta a la API externa y pasa la respuesta al cliente
app.get("/simpsons-quote", async (req, res) => {
  try {
    const response = await fetch(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    const data = await response.json();
    res.json(data[0]);
  } catch (error) {
    console.error("Error al consumir la API:", error);
    res.status(500).json({ error: "Hubo un error al obtener la frase." });
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
