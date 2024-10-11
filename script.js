//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Inicializar EmailJS

// Capturar el formulario y agregar evento de validación
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita la recarga de la página y la redirección

    // Limpiar mensajes anteriores
    document.getElementById('error').innerText = '';
    document.getElementById('exito').innerText = '';

    // Validar el nombre
    const nombre = document.getElementById('nombre').value;
    if (nombre.trim() === '') {
        document.getElementById('error').innerText = 'Por favor, ingresa tu nombre.';
        return;
    }

    // Validar el correo electrónico
    const correo = document.getElementById('correo').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        document.getElementById('error').innerText = 'Por favor, ingresa un correo electrónico válido.';
        return;
    }

    // Validar el mensaje
    const mensaje = document.getElementById('mensaje').value;
    if (mensaje.trim().length < 10) {
        document.getElementById('error').innerText = 'El mensaje debe tener al menos 10 caracteres.';
        return;
    }

    // Si todas las validaciones pasan, se procede con el envío
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('exito').innerText = 'Formulario enviado con éxito.';
            form.reset(); // Limpia el formulario después del envío
        } else {
            document.getElementById('error').innerText = 'Error al enviar el formulario. Intenta de nuevo.';
        }
    })
    .catch(error => {
        document.getElementById('error').innerText = 'Hubo un problema al enviar el formulario.';
        console.error('Error:', error);
    });
});



