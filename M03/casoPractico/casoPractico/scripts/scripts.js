// Base de datos simulada en LocalStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { usuario: 'admin', password: '1234' },
];

// Mensajes de texto reutilizables
const mensajes = {
    camposVacios: 'Por favor, llena todos los campos.',
    usuarioExistente: 'El usuario ya está registrado.',
    registroExitoso: 'Usuario registrado con éxito. Tu usuario es:',
    loginExitoso: 'Bienvenido',
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
        window.location.href = 'pages/panel.html'; // Redirigir al panel
    } else {
        alert(mensajes.credencialesInvalidas);
    }
});

// Validar campos vacíos
function validarCampos(...campos) {
    return campos.every(campo => campo !== '');
}