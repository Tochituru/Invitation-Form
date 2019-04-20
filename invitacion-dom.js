var todoElDoc = document.querySelector('body')
var formulario = document.forms[0];


formulario.onsubmit = function validacion(e) {
    var nombreForm = formulario.elements[0];
    var nombre = nombreForm.value
    var edadForm = formulario.elements[1];
    var edad = edadForm.value;
    var estadoSoltere = document.getElementById('Soltere');
    var estadoCasade = document.getElementById('Casade');
    var estadoPoliamor = document.getElementById('Poliamor');
    var estadoNoContesta = document.getElementById('no-contesta');
    var nacionalidadForm = document.querySelector('select');
    var nacionalidadElegida = nacionalidadForm.selectedIndex
    var nacionalidad = nacionalidadElegida.value
    console.log(nacionalidad)
    e.preventDefault();
    if (nombre.length === 0) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Las puertas no se abren a campos vacíos. Completá el nombre';
        nuevoDiv.setAttribute('id', 'error-de-nombre');
        todoElDoc.appendChild(nuevoDiv);
    };

    if (edad.length === 0) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Las puertas no se abren a campos vacíos. Completá la edad';
        nuevoDiv.setAttribute('id', 'error-de-edad');
        todoElDoc.appendChild(nuevoDiv);
    } else if (edad < 18) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'No me gustan les críes. ¡Suerte la próxima!';
        nuevoDiv.setAttribute('id', 'error-de-edad')
        todoElDoc.appendChild(nuevoDiv);
    } else if (edad > 120) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'I\'m young and I like to be young... ';
        nuevoDiv.setAttribute('id', 'error-de-edad')
        todoElDoc.appendChild(nuevoDiv);
    };
    var estado = '';
    if (estadoSoltere.checked) {
        estado = estadoSoltere.value;
    } else if (estadoCasade.checked) {
        estado = estadoCasade.value;
    } else if (estadoPoliamor.checked) {
        estado = estadoPoliamor.value
    } else if (estadoNoContesta.checked) {
        estado = estadoNoContesta.value
    }

    if (!estado) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Contestá, no seas chote';
        nuevoDiv.setAttribute('id', 'error-de-estado-civil')
        todoElDoc.appendChild(nuevoDiv);
    }
    //cómo hacer para que se borren los mensajes: on change?

    function FichaDeInvitade(nombre, edad, estado, nacionalidad) {
        var fichaArray = [nombre, edad, estado, nacionalidad]
        var categoriaArray = ['Nombre: ', 'Edad: ', 'Estado civil: ', 'Nacionalidad: ']
        divFichaInvitade = document.createElement('div');
        divFichaInvitade.setAttribute('class', 'ficha-de-invitade');
        divFichaInvitade.textContent = 'Invitado';
        todoElDoc.appendChild(divFichaInvitade);
        function sumarDiv(divFicha) {
            for (let index = 0; index < fichaArray.length; index++) {
                var divFicha = document.createElement('div');
                divFicha.textContent = categoriaArray[index] + fichaArray[index];
                divFichaInvitade.appendChild(divFicha);
            }
        }


        sumarDiv(divFichaInvitade); 
    }

    if (nombre.length > 0 && edad > 18 && edad < 120 && estado) {
        FichaDeInvitade(nombre, edad, estado, nacionalidad)

    }
//no funciona la nacionalidad
}

