const mysql = require('mysql2');

// Configuración de la conexión
const connection = mysql.createConnection({
    host: 'localhost',       
    user: 'root',            
    password: 'Nakajito123',            
    database: 'ejemplo_db'
});

// Establecer la conexión
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err.message);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Realizar una consulta de prueba
connection.query('SELECT * FROM usuarios', (err, results, fields) => {
    if (err) {
        console.error('Error al realizar la consulta:', err.message);
        return;
    }
    console.log('Resultados de la consulta:', results);
});

// Cerrar la conexión
connection.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión:', err.message);
        return;
    }
    console.log('Conexión cerrada correctamente');
});