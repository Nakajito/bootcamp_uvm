import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";

const App = () => {
  const [autores, setAutores] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");

  const obtenerAutores = () => {
    fetch("http://127.0.0.1:8000/api_autores/consulta_autores/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setAutores(data.autores);
        } else {
          Swal.fire("Error", data.message, "error");
        }
      });
  };

  useEffect(() => {
    obtenerAutores();
  }, []);

  const guardarAutor = (e) => {
    e.preventDefault();
    const url = editing
      ? `http://127.0.0.1:8000/api_autores/actualizar_autor/${selectedId}/`
      : "http://127.0.0.1:8000/api_autores/crear_autor/";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, pais }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          Swal.fire("Éxito", data.message, "success");
          setModalOpen(false);
          obtenerAutores();
        } else {
          Swal.fire("Error", data.message, "error");
        }
      })
      .catch(() => Swal.fire("Error", "Error en la operación", "error"));
  };

  const abrirModal = (autor = null) => {
    if (autor) {
      setEditing(true);
      setSelectedId(autor.AutorId);
      setNombre(autor.Nombre);
      setPais(autor.Pais);
    } else {
      setEditing(false);
      setSelectedId(null);
      setNombre("");
      setPais("");
    }
    setModalOpen(true);
  };

  const eliminarAutor = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No podrás revertir esta acción",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://127.0.0.1:8000/api_autores/eliminar_autor/${id}/`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.status === "success") {
              Swal.fire("Eliminado", data.message, "success");
              obtenerAutores();
            } else {
              Swal.fire("Error", data.message, "error");
            }
          })
          .catch(() => Swal.fire("Error", "No se pudo eliminar", "error"));
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Gestión de Autores</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => abrirModal()}
      >
        Crear Autor
      </button>

      <ul className="mt-4">
        {autores.map((autor) => (
          <li key={autor.AutorId} className="flex justify-between items-center">
            <span>
              {autor.Nombre} ({autor.Pais})
            </span>
            <div>
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                onClick={() => abrirModal(autor)}
              >
                Actualizar
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => eliminarAutor(autor.AutorId)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {modalOpen && (
        <Modal
          editing={editing}
          nombre={nombre}
          pais={pais}
          setModalOpen={setModalOpen}
          guardarAutor={guardarAutor}
          setNombre={setNombre}
          setPais={setPais}
        />
      )}
    </div>
  );
};

const Modal = ({
  editing,
  nombre,
  pais,
  setModalOpen,
  guardarAutor,
  setNombre,
  setPais,
}) =>
  ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#2f2f2f",
          padding: "20px",
          borderRadius: "8px",
          width: "400px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "1px solid #ddd",
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>
          {editing ? "Actualizar Autor" : "Crear Autor"}
        </h2>
        <form onSubmit={guardarAutor}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Nombre
          </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
          <label style={{ display: "block", marginBottom: "8px" }}>País</label>
          <input
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            required
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              style={{
                marginRight: "8px",
                backgroundColor: "#f5f5f5",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "#000",
                border: "none",
                borderRadius: "4px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              {editing ? "Actualizar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );

export default App;
