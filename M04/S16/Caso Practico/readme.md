# CONEXIÓN A UNA BASE DE DATOS MYSQL CONNODE.JS
## OBJETIVO
- Practicar la conexión a una base de datos MySQL desde una aplicación JavaScript utilizando Node.js.
- Aprender a realizar consultas SQL básicas y manejar los resultados en una aplicación Node.js.
- Entender los conceptos básicos de la interacción entre Node.js y una base de datos relacional como MySQL.
# CONFIGURACIÓN DEL ENTORNO
Asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo e instalarlo desde el sitio web oficial de Node.js. Instala el módulo mysql de Node.js para interactuar con la base de datos MySQL. Puedes instalarlo ejecutando npm install mysql en tu terminal.
# CREACIÓN DE UNA BASE DE DATOS MYSQL
Utiliza una herramienta como php MyAdmin o MySQL Workbench para crear una base de datos en MySQL, o bien, puedes crearla directamente desde la línea de comandos de MySQL.
Por ejemplo, puedes crear una base de datos llamada ejemplo_dbcon una tabla llamada usuarios que tenga columnas como id, nombre, email, etc.
# CREAR UN ARCHIVO JAVASCRIPT
Crea un nuevo archivo JavaScript llamado conexion_db.js.
# CONECTAR A LA BASE DE DATOS DESDE NODE.JS
En el archivo conexion_db.js, importa el módulo mysql. Crea una conexión a la base de datos utilizando las credenciales de acceso y la información de conexión adecuadas.
# REALIZAR CONSULTAS SQL
Después de establecer la conexión, puedes ejecutar consultas SQL utilizando el objeto conexión.
# CERRAR LA CONEXIÓN
No te olvides de cerrar la conexión una vez que hayas terminado de interactuar con la base de datos. Puedes hacerlo llamando al método end() del objeto conexión.
