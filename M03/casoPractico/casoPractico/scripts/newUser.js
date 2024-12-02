// Base de datos simulada en LocalStorage
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    { usuario: 'admin', password: '1234' },
];

// Mensajes de texto reutilizables
const mensajes = {
    camposVacios: 'Por favor, llena todos los campos.',
    usuarioExistente: 'El usuario ya está registrado.',
    registroExitoso: 'Usuario registrado con éxito. Tu usuario es:',
};

// Validar campos vacíos
function validarCampos(...campos) {
    return campos.every(campo => campo !== '');
}

// Guardar nuevo usuario
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

    // Agregar al arreglo y guardar en LocalStorage
    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert(`${mensajes.registroExitoso} ${nuevoUsuario.usuario}`);

    // Limpiar campos y redirigir
    document.getElementById('nameNewUser').value = '';
    document.getElementById('lastnameNewUser').value = '';
    document.getElementById('passwordNewUser').value = '';
    window.location.href = '../index.html';
});