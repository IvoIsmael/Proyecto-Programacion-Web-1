window.addEventListener('scroll', function() {
    var cabecera = document.querySelector('.cabecera');
    var posicion = window.scrollY;

    if (posicion > 50) {
        cabecera.classList.add('blanca');
    } else {
        cabecera.classList.remove('blanca');
    }
});

var botonHamburguesa = document.querySelector('.btn-hamburguesa');
if (botonHamburguesa) {
    botonHamburguesa.addEventListener('click', function() {
        document.querySelector('.navegacion').classList.toggle('activo');
    });
}

var botonServicios = document.querySelector('.btn-menu');
var listaServicios = document.getElementById('lista-servicios')

if (botonServicios && listaServicios) {
    botonServicios.addEventListener('click', function(e) {
        e.stopPropagation();
        listaServicios.classList.toggle('abierto');
    });

    document.addEventListener('click', function() {
        listaServicios.classList.remove('abierto');
    });

    listaServicios.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}



var formulario = document.getElementById('form-contacto');

if (formulario) {
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        //se guarda el login
        var nombre = document.querySelector('input[type="text"]').value;
        var usuarioLogueado = true;

        alert('Listo ' + nombre + ', conectando con un experto...');
        var btn = document.querySelector('.btn-contactar-experto');
        btn.textContent = "Conectando...";
        btn.disabled = true;
        cargarVoiceflow();
    });
}
//funcion del widget de voiceflow
function cargarVoiceflow() {
    var d = document;
    var t = 'script';
    var v = d.createElement(t);
    var s = d.getElementsByTagName(t)[0];

    //id aleatoreo
    var sessionID = Math.random().toString(36).substring(7);

    v.onload = function() {
        window.voiceflow.chat.load({
            verify: { projectID: '69338515774816d337ac576b' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
            userID: sessionID,
            voice: {
                url: "https://runtime-api.voiceflow.com"
            }
        }).then(() => {
            setTimeout(() => {
                window.voiceflow.chat.open();
            }, 1000);
        });
    };
    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";
    s.parentNode.insertBefore(v, s);
}