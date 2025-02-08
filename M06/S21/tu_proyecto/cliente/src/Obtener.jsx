import React, { useEffect, useState } from "react";

const ListaAutores = () => {
  const [autores, setAutores] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/consulta-autores/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener autores");
        }
        return response.json();
      })
      .then((data) => {
        setAutores(data.autores);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Autores</h1>
      {error && <p>{error}</p>}
      <ul>
        {autores.map((autor) => (
          <li key={autor.id}>
            {autor.nombre} ({autor.pais})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaAutores;
