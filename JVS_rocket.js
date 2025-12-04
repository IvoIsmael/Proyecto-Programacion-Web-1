// Menú hamburguesa móvil
document.querySelector('.btn-hamburguesa').addEventListener('click', () => {
    document.querySelector('.navegacion').classList.toggle('activo');
});

// ANIMACIÓN DEL MENÚ SERVICIOS (click + hover)
const btnMenu = document.querySelector('.btn-menu');
const listaServicios = document.getElementById('lista-servicios');

btnMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    listaServicios.classList.toggle('abierto');
});

// Cerrar al hacer click fuera
document.addEventListener('click', () => {
    listaServicios.classList.remove('abierto');
});

// Evitar que se cierre al hacer click dentro del menú
listaServicios.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Al enviar el formulario → abre el chatbot
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Perfecto! En un momento te conectaremos con un experto.');
    if (typeof tidioChatApi !== 'undefined') {
        tidioChatApi.show();
        tidioChatApi.open();
    }
});