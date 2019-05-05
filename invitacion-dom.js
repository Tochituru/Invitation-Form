const todoElDoc = document.querySelector('body');
const formulario = document.forms[0];


formulario.onsubmit = function validacion(e) {
    e.preventDefault();
    const divNombre = document.getElementsByClassName('name-input');
    const divEdad = document.getElementsByClassName('age-input');
    const divEstado = document.getElementsByClassName('estado-checkbox');
    const nombreForm = formulario.elements[0];
    const nombre = nombreForm.value
    const edadForm = formulario.elements[1];
    const edad = edadForm.value;
    const estadoSoltere = document.getElementById('Soltere');
    const estadoCasade = document.getElementById('Casade');
    const estadoPoliamor = document.getElementById('Poliamor');
    const estadoNoContesta = document.getElementById('no-contesta');
    const nacionalidadForm = document.querySelector('select');
    const indiceElegido = nacionalidadForm.selectedIndex
    const nacionalidad = nacionalidadForm[indiceElegido].value;

    //validacion
    if (nombre.length === 0) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Las puertas no se abren a campos vacíos. ¡Completá el nombre!';
        nuevoDiv.setAttribute('class', 'error');
        nuevoDiv.setAttribute('id', 'error-de-nombre');
        divNombre[0].appendChild(nuevoDiv);
    };

    if (edad.length === 0) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Las puertas no se abren a campos vacíos. ¡Completá la edad!';
        nuevoDiv.setAttribute('class', 'error');
        nuevoDiv.setAttribute('id', 'error-de-edad');
        divEdad[0].appendChild(nuevoDiv);
    } else if (edad < 18) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'No me gustan les críes. ¡Suerte la próxima!';
        nuevoDiv.setAttribute('class', 'error');
        nuevoDiv.setAttribute('id', 'error-de-edad')
        divEdad[0].appendChild(nuevoDiv);
    } else if (edad > 120) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'I\'m young and I like to be young... ';
        nuevoDiv.setAttribute('class', 'error');
        nuevoDiv.setAttribute('id', 'error-de-edad')
        divEdad[0].appendChild(nuevoDiv);
    };
    let estado = '';
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
        let nuevoDiv = document.createElement('div');
        nuevoDiv.textContent = 'Contestá, ¡no seas chote!';
        nuevoDiv.setAttribute('class', 'error');
        nuevoDiv.setAttribute('id', 'error-de-estado-civil')
        divEstado[0].appendChild(nuevoDiv);
    }

    //Borrar errores
    function BorrarElemento() {
        this.nextElementSibling.remove()
    }
    nombreForm.onfocus = BorrarElemento;
    edadForm.onfocus = BorrarElemento;

    const errorEstadoCivil = document.getElementById('error-de-estado-civil');
    estadoSoltere.onclick = function BorrarErrorEstadoCivil() {
        if (estadoSoltere.checked === true || estadoCasade.checked === true || estadoPoliamor.checked === true || estadoNoContesta.checked) {
            divEstado[0].removeChild(errorEstadoCivil);
        }
    }

    //Crear ficha de invitade
    function FichaDeInvitade(nombre, edad, estado, nacionalidad) {
        var fichaArray = [nombre, edad, estado, nacionalidad];
        var categoriaArray = ['Nombre: ', 'Edad: ', 'Estado civil: ', 'Nacionalidad: '];
        var claseArray = ['ficha-nombre', 'ficha-edad', 'ficha-estado', 'ficha-nacionalidad'];
        divFichaInvitade = document.createElement('div');
        divFichaInvitade.setAttribute('class', 'ficha-de-invitade');
        divFichaInvitade.textContent = 'Tierraplanista';
        todoElDoc.appendChild(divFichaInvitade);
        function agregarDiv(divFicha) {
            for (let i = 0; i < fichaArray.length; i++) {
                var divFicha = document.createElement('div');
                divFicha.textContent = categoriaArray[i] + fichaArray[i];
                divFicha.setAttribute('class', claseArray[i]);
                divFicha.setAttribute('contenteditable', 'true');
                divFichaInvitade.appendChild(divFicha);
            }
        }
        agregarDiv(divFichaInvitade);
        divBotonCerrar = document.createElement('div');
        divFichaInvitade.appendChild(divBotonCerrar);
        divBotonCerrar.setAttribute('id', 'close-button');
        divBotonCerrar.innerHTML = '<i class="far fa-times-circle fa-lg"></i>';
    }

    if (nombre.length > 0 && edad > 18 && edad < 120 && estado) {
        FichaDeInvitade(nombre, edad, estado, nacionalidad)
    }
    //Borrar la ficha

    function BorrarFichaDeInvitade() {
        divFichaInvitade.remove()        
    }
    divBotonCerrar.onclick = BorrarFichaDeInvitade

    //Editar la ficha de invitado




    //PAra editar la ficha, hacer input en vez de div y ccsearlo engaño
    //Mantengo el div, agarro el .textContent en una variable, creo un input, le pongo el  value de ese .textContext y borro el div. Cuando el usuario hace onblur, pasa de input a div de nuevo.
}