//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
// Inicializar EmailJS
(function(){
    emailjs.init('ASM8jncpN9bas1cxq'); // Coloca tu user ID aquí (obtenido de tu cuenta de EmailJS)
})();

// Capturar el formulario y agregar evento de validación
document.getElementById('formularioContacto').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe inmediatamente

    // Capturar los valores de los campos del formulario
    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();
    let error = document.getElementById('error'); // Elemento para mostrar mensajes de error

    error.innerHTML = ''; // Limpiar mensajes de error anteriores

    // Validaciones de los campos
    if (nombre === '') {
        error.innerHTML = 'El nombre es obligatorio.';
        return;
    }
    if (correo === '') {
        error.innerHTML = 'El correo electrónico es obligatorio.';
        return;
    }
    if (!validarCorreo(correo)) {
        error.innerHTML = 'El correo electrónico no es válido.';
        return;
    }
    if (mensaje === '') {
        error.innerHTML = 'El mensaje no puede estar vacío.';
        return;
    }

    // Si la validación es correcta, enviar el correo
    enviarCorreo(nombre, correo, mensaje);
});

// Función para validar el formato del correo electrónico
function validarCorreo(correo) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correo
    return regex.test(correo);
}

// Función para enviar el correo utilizando EmailJS
function enviarCorreo(nombre, correo, mensaje) {
    let templateParams = {
        nombre: nombre,  // Este valor se reemplazará en {{nombre}}
        correo: correo,  // Este valor se reemplazará en {{correo}}
        mensaje: mensaje // Este valor se reemplazará en {{mensaje}}
    };

    // Enviar el correo a través de EmailJS
    emailjs.send('service_6kou3cr' , "template_sjaom7a", templateParams)
        .then(function(response) {
            alert('Correo enviado con éxito!'); // Mensaje de éxito
            document.getElementById('formularioContacto').reset(); // Limpiar el formulario
        }, function(error) {
            console.error('Error al enviar el correo:', error); // Imprimir error en consola
            alert('Ocurrió un error al enviar el correo: ' + JSON.stringify(error)); // Mensaje de error
        });
}


