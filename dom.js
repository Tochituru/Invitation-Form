var todoElDoc = document.querySelector('body')
var formulario = document.forms[0];

formulario.onsubmit = function validacion(e) {
    var nombreForm = formulario.elements[0];
    var nombre = nombreForm.value
    var edadForm = formulario.elements[1];
    var edad = edadForm.value
    var estadoSoltere = document.getElementsByName('Soltere')
    var estadoCasade = document.getElementsByName('Casade')
    var estadoPoliamor = document.getElementsByName('Poliamor')
    var estadoNoContesta = document.getElementsByName('no-contesta')
    var opcionesNacionalidad = document.querySelectorAll('option');
    var divNombre = document.getElementsByClassName('name');

    e.preventDefault();
    if (nombre.length === 0) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Las puertas no se abren a campos vacíos. Completá el nombre';
        todoElDoc.appendChild(nuevoDiv);
    }
    if (edad.length === 0) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Las puertas no se abren a campos vacíos. Completá la edad';
        todoElDoc.appendChild(nuevoDiv);
    } else if (edad < 18) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'No me gustan les críes. ¡Suerte la próxima!';
        todoElDoc.appendChild(nuevoDiv);
    } else if (edad > 120) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'I\'m young and I like to be young... ';
        todoElDoc.appendChild(nuevoDiv);
    }

    if (!estadoSoltere.checked || !estadoCasade.checked || !estadoPoliamor || !estadoNoContesta.checked) {
        var nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Contestá, no seas chote';
        todoElDoc.appendChild(nuevoDiv);
        
    }
}