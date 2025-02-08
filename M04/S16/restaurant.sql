CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    encargado VARCHAR(100)
);


CREATE TABLE platos (
    id_plato INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT,
    nivel_dificultad ENUM('Fácil', 'Medio', 'Difícil') NOT NULL,
    foto TEXT, -- Puede almacenar URLs o rutas de imagen
    precio DECIMAL(10, 2) NOT NULL,
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);


CREATE TABLE recetas (
    id_receta INT AUTO_INCREMENT PRIMARY KEY,
    id_plato INT NOT NULL UNIQUE,
    instrucciones TEXT NOT NULL,
    FOREIGN KEY (id_plato) REFERENCES platos(id_plato)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);


CREATE TABLE ingredientes (
    id_ingrediente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    cantidad_actual DECIMAL(10, 2) NOT NULL,
    unidad_medida VARCHAR(20) NOT NULL
);


CREATE TABLE recetas_ingredientes (
    id_relacion INT AUTO_INCREMENT PRIMARY KEY,
    id_receta INT NOT NULL,
    id_ingrediente INT NOT NULL,
    cantidad DECIMAL(10, 2) NOT NULL,
    unidad_medida VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_receta) REFERENCES recetas(id_receta)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    FOREIGN KEY (id_ingrediente) REFERENCES ingredientes(id_ingrediente)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
