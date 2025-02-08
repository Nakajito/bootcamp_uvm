import React, { useState } from "react";

const CrearAutor = () => {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8000/crear-autor/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, pais }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al crear autor");
        }
        return response.json();
      })
      .then((data) => {
        setMensaje(data.message);
        setNombre("");
        setPais("");
      })
      .catch((err) => {
        setMensaje(err.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Autor</h2>
      {mensaje && <p>{mensaje}</p>}
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </label>
      <label>
        País:
        <input
          type="text"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
        />
      </label>
      <button type="submit">Crear</button>
    </form>
  );
};

export default CrearAutor;
