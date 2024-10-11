//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Inicializar EmailJS

// Capturar el formulario y agregar evento de validación
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    // Limpiar el mensaje de error
    document.getElementById('error').innerText = '';

    // Validar el nombre
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        document.getElementById('error').innerText = 'Por favor, ingresa tu nombre.';
        event.preventDefault();
        return;
    }

    // Validar el correo electrónico
    const correo = document.getElementById('correo').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        document.getElementById('error').innerText = 'Por favor, ingresa un correo electrónico válido.';
        event.preventDefault();
        return;
    }

    // Validar el mensaje
    const mensaje = document.getElementById('mensaje').value;
    if (mensaje.trim().length < 10) {
        document.getElementById('error').innerText = 'El mensaje debe tener al menos 10 caracteres.';
        event.preventDefault();
        return;
    }

    // El formulario se enviará automáticamente si no hay errores.
});



