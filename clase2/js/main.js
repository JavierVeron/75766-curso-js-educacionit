// Eventos onClick
// Opción #1 -> definiendo un evento onclick en un elemento html
function hacerClick() {
    console.log("Hiciste click!");
}

function cambiarTexto() {
    boton.innerHTML = "Hubo un Click!";
}

function cambiarColor() {
    boton.className = "btn btn-danger";
}

// Primero hago referencia a un botón html en una variable
//const boton = document.getElementById("boton1")
//console.log(boton);

// Opción #2 -> modificando el evento como propiedad
/* //boton.onclick = hacerClick; // Asociar la función hacerClick con el evento onClick del botón "boton1"
//boton.onclick = cambiarTexto; 
boton.onmouseout = cambiarColor; 
boton.onclick = () => {
    console.log("Cursando JS Avanzado! #1");
} */

// Opción #3 => con el método addEventListener
/* //boton.addEventListener("click", hacerClick)
//boton.addEventListener("click", cambiarTexto)
boton.addEventListener("mouseout", cambiarColor)
boton.addEventListener("click", () => {
    console.log("Cursando JS Avanzado! #2");
}) */


// Eventos onInput
/* function capturarTexto(event) {
    let campo = event.target;
    let texto = campo.value;
    //console.log(campo);
    console.log(texto);
    texto
}

function mostrarEscribiendo() {
    let destino = document.getElementById("destino");
    destino.innerHTML = "Escribiendo...";
}

function ocultarEscribiendo() {
    let destino = document.getElementById("destino");
    destino.innerHTML = "";
}

function enviarTexto() {
    let campoTexto = document.getElementById("texto");
    let destino = document.getElementById("destino");
    destino.innerHTML = campoTexto.value;
} */


// Eventos onChange
/* function cambiarMoneda(event) {
    let campoSelect = event.target;    

    if (campoSelect.value != "") {
        console.log(campoSelect);
        let divContenido = document.getElementById("contenido");
        divContenido.innerHTML = "Moneda seleccionada: <b>" + campoSelect.value + "</b>";
    }
} */

// Ejemplo Aplicado
/* const mensajeES = () => {
    let divContenido = document.getElementById("contenido");
    divContenido.innerHTML = "Idioma seleccionado: <b>Español</b>";
}

const mensajeEN = () => {
    let divContenido = document.getElementById("contenido");
    divContenido.innerHTML = "Language selected: <b>English</b>";
}

const asignarIdioma = () => {
    const radioES = document.getElementById("ES");
    const radioEN = document.getElementById("EN");
    const boton = document.getElementById("boton");
    boton.className = "btn bg-dark-subtle"

    if (radioES.checked) {
        boton.onclick = mensajeES
    } else {
        boton.onclick = mensajeEN
    }
} */


// API EventTarget
/* const nombreActual = document.getElementById("nombreActual");
const agregarNombre = document.getElementById("agregarNombre");
const mostrador = document.getElementById("mostrador");
const contenido = document.getElementById("contenido");

agregarNombre.addEventListener("click", () => {
    mostrador.className = "btn btn-danger";
    mostrador.addEventListener("click", () => {
        contenido.innerHTML = "Nombre Ingresado: <b>" + nombreActual.value + "</b>";
    })
}) */

// Crear un EventTarget
/* const Carrito = {
    EventTarget: new EventTarget,
    items:[],
    agregar: (item) => {
        Carrito.items.push(item);
        Carrito.EventTarget.dispatchEvent(new Event("item-agregado"));
    },
    eliminar: (item) => {
        Carrito.items = Carrito.items.filter(elem => elem != item);
        Carrito.EventTarget.dispatchEvent(new Event("item-eliminado"));
    }
}

Carrito.EventTarget.addEventListener("item-agregado", () => {
    console.log("Elemento agregado!");
    console.log(Carrito.items);
})

Carrito.EventTarget.addEventListener("item-eliminado", () => {
    console.log("Elemento eliminado!");
    console.log(Carrito.items);
})

Carrito.agregar(10);
Carrito.agregar(20);
Carrito.agregar(30);
Carrito.eliminar(30);
Carrito.eliminar(10); */

// Bubbling y Capturing
/* const boton = document.getElementById("boton");

document.addEventListener("click", () => {
    console.log("Click en el DOM!");
});

function saludar() {
    console.log("Hola!");
}

boton.addEventListener("click", (e) => {
    console.log("Click en el Botón!");
    e.preventDefault(); // Detiene la ejecución por defecto de un elemento html
    e.stopPropagation();
});
boton.addEventListener("click", saludar); // Agregar al evento "click" la función "saludar"
boton.removeEventListener("click", saludar) // Eliminar la función "saludar" al evento "click" */


// Validaciones de Formulario
// Validación con el botón del tipo "button"
/* const validarFormulario = () => {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const clave = document.getElementById("clave");
    const claveError = document.getElementById("claveError");
    const form1 = document.getElementById("form1");

    if (email.value == "") {
        emailError.className = "text-danger";
        emailError.innerHTML = "Complete el campo Email!";
        return false; // Detener la ejecución de mi programa en este punto
    } else {
        emailError.innerHTML = "";
    }

    if (clave.value == "") {
        claveError.className = "text-danger";
        claveError.innerHTML = "Complete el campo Contraseña!";
        return false; // Detener la ejecución de mi programa en este punto
    } else {
        claveError.innerHTML = "";
    }
    
    console.log("Formulario enviado!");
    form1.submit();
} */

// Validación con el botón del tipo "submit"
/* const validarFormulario = (e) => {
    e.preventDefault(); // Detengo el envío del Formulario
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const clave = document.getElementById("clave");
    const claveError = document.getElementById("claveError");
    const form1 = document.getElementById("form1");

    if (email.value == "") {
        emailError.className = "text-danger";
        emailError.innerHTML = "Complete el campo Email!";
        return false; // Detener la ejecución de mi programa en este punto
    } else {
        emailError.innerHTML = "";
    }

    if (clave.value == "") {
        claveError.className = "text-danger";
        claveError.innerHTML = "Complete el campo Contraseña!";
        return false; // Detener la ejecución de mi programa en este punto
    } else {
        claveError.innerHTML = "";
    }
    
    console.log("Formulario enviado!");
    form1.submit();
} */

//const btnEnviar = document.getElementById("btnEnviar");
//btnEnviar.onclick = validarFormulario;

const form1 = document.getElementById("form1");
const btnEnviar1 = document.getElementById("btnEnviar1");
const btnEnviar2 = document.getElementById("btnEnviar2");

/* form1.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const campoEmail = e.target[0];
    //console.log(campoEmail.checkValidity());
    //console.log(campoEmail.validity);

    if (!campoEmail.checkValidity()) {
        email.setCustomValidity("No te olvides de completar el Campo Email")
    }
}) */

/* btnEnviar1.addEventListener("click", () => {
    console.log("Envío del Form desde el Botón #1");
    form1.submit();
})

form1.addEventListener("onsubmit", () => {
    console.log("Envío del Form desde el Botón #2");
}) */


// Validación PRO del Formulario
const validarFormulario = () => {
    const form1 = document.getElementById("form1");

    if (!validarCampoEmail()) {
        return false;
    }

    if (!validarCampoClave()) {
        console.log("hola #2");
        return false;
        
    }
    
    console.log("Formulario enviado!");
    form1.submit();
}

const validarCampoEmail = () => {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    if (email.value == "") {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        emailError.className = "text-danger";
        emailError.innerHTML = "Complete el campo Email!";
        return false; // Detener la ejecución de mi programa en este punto
    } else if (email.value.length < 5) {
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        emailError.className = "text-danger";
        emailError.innerHTML = "El Campo Email debería tener más de 4 caracteres!";
        return false;
    } else if (!email.value.includes("@")) {
        emailError.className = "text-danger";
        email.classList.add("is-invalid");
        email.classList.remove("is-valid");
        emailError.innerHTML = "El Campo Email está mal escrito!";
        return false;
    } else { // Detener la ejecución de mi programa en este punto {
        emailError.innerHTML = "";
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        return true;
    }
}

const validarCampoClave = () => {
    const clave = document.getElementById("clave");
    const claveError = document.getElementById("claveError");

    if (clave.value == "") {
        claveError.classList.add("is-invalid");
        claveError.classList.remove("is-valid");
        claveError.className = "text-danger";
        claveError.innerHTML = "Complete el campo Contraseña!";
        return false; // Detener la ejecución de mi programa en este punto
    } else if (clave.value.length < 5) {
        claveError.classList.add("is-invalid");
        claveError.classList.remove("is-valid");
        claveError.className = "text-danger";
        claveError.innerHTML = "El Campo Clave debería tener más de 4 caracteres!";
        return false;
    } else {
        claveError.classList.add("is-valid");
        claveError.classList.remove("is-invalid");
        claveError.innerHTML = "";
        return true;
    }
}