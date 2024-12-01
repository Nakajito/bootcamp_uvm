// Verificar si hay usuarios en LocalStorage y cargarlos
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { usuario: 'admin', password: '1234' },
];

// Mensajes de texto reutilizables
const mensajes = {
    camposVacios: 'Por favor, llena todos los campos.',
    credencialesInvalidas: 'Credenciales incorrectas. Intenta de nuevo.',
    loginExitoso: 'Inicio de sesión exitoso. ¡Bienvenido!',
    usuarioExistente: 'El usuario ya está registrado.',
    registroExitoso: 'Usuario registrado con éxito. Tu usuario es:',
};

// Función para manejar el login
document.getElementById('login').addEventListener('click', () => {
    const userLogin = document.getElementById('userLogin').value.trim();
    const passwordLogin = document.getElementById('passwordLogin').value.trim();

    if (!validarCampos(userLogin, passwordLogin)) {
        alert(mensajes.camposVacios);
        return;
    }

    const usuarioEncontrado = usuarios.find(
        usuario => usuario.usuario === userLogin && usuario.password === passwordLogin
    );

    if (usuarioEncontrado) {
        alert(mensajes.loginExitoso);
        window.location.href = 'panel.html'; // Redirigir al panel
    } else {
        alert(mensajes.credencialesInvalidas);
    }
});

// Función para validar campos vacíos
function validarCampos(...campos) {
    return campos.every(campo => campo.trim() !== '');
}

// Función para guardar un nuevo usuario
document.getElementById('saveUser').addEventListener('click', () => {
    const nombre = document.getElementById('nameNewUser').value.trim();
    const apellido = document.getElementById('lastnameNewUser').value.trim();
    const password = document.getElementById('passwordNewUser').value.trim();

    if (!validarCampos(nombre, apellido, password)) {
        alert(mensajes.camposVacios);
        return;
    }

    const nuevoUsuario = {
        usuario: `${nombre.toLowerCase()}-${apellido.toLowerCase()}`,
        password: password,
    };

    const existeUsuario = usuarios.some(
        usuario => usuario.usuario === nuevoUsuario.usuario
    );

    if (existeUsuario) {
        alert(mensajes.usuarioExistente);
        return;
    }

    // Agregar el nuevo usuario al arreglo
    usuarios.push(nuevoUsuario);

    // Guardar en LocalStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert(`${mensajes.registroExitoso} ${nuevoUsuario.usuario}`);

    // Limpiar los campos del formulario
    document.getElementById('nameNewUser').value = '';
    document.getElementById('lastnameNewUser').value = '';
    document.getElementById('passwordNewUser').value = '';

    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
});
