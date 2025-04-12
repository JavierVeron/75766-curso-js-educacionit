// Proxy
let usuario = {
    nombre:"santiago",
    apellido:"dono",
    email:"santidono@gmail.com",
    edad:23
}

/* console.log(usuario);
let usuario2 = new Proxy(usuario, {});
console.log(usuario2);
console.log(usuario.nombre);
console.log(usuario2.nombre); */

// Transformar el objeto original con Proxy
usuario = new Proxy(usuario, {
    get(target, prop) {
        switch(prop) {
            case "nombre":
                return target[prop].toUpperCase();
            case "apellido":
                return target[prop].toUpperCase();
            default:
                return target[prop]
        }
    },
    set(target, prop, value) {
        switch(prop) {
            case "nombre":
                if (typeof value == "string") {
                    return target[prop] = value.toUpperCase();
                } else {
                    throw new Error("El valor del Campo Nombre debe ser un String!");
                }
            case "apellido":
                if (typeof value == "string") {
                    return target[prop] = value.toUpperCase();
                } else {
                    throw new Error("El valor del Campo Apellido debe ser un String!");
                }
            case "email":
                if (typeof value == "string") {
                    return target[prop] = value.toUpperCase();
                } else {
                    throw new Error("El valor del Campo Email debe ser un String!");
                }
            case "edad":
                if (typeof value == "number") {
                    return target[prop] = value;
                } else {                    
                    throw new Error("El valor del Campo Edad debe ser un Number!");
                }
        }
    }
})

// Seteando datos (set)
/* usuario.nombre = "Derek";
usuario.apellido = "Borba";
usuario.email = "derekborba@gmail.com";
usuario.edad = 17; */
// Accediendo a datos (get)
/* console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.email);
console.log(usuario.edad); */

// Crear un Proxy que modifique contenidos HTML
/* const contenido = new Proxy({}, {
    set(target, prop, value) {
        document.getElementById(prop).innerHTML = value;
    }
})

const contenedor = new Proxy({}, {
    set(target, prop, value) {
        document.getElementById(prop).innerHTML = `<${value.elementoHTML} class="${value.colorTexto} ${value.colorFondo}">${value.texto}</${value.elementoHTML}>`;
    }
})

const parrafo = new Proxy({}, {
    set(target, prop, value) {
        document.getElementById(prop).innerHTML = value.texto;
        document.getElementById(prop).className = `${value.colorTexto} ${value.colorFondo}`; 
    }
})

contenido.texto1 = "Educación IT";
contenido.texto2 = "Curso de React JS";

contenedor.texto1 = {
    texto:"Educación IT",
    colorTexto:"text-primary fw-bold",
    colorFondo:"bg-light p-3",
    elementoHTML:"h1"
}
contenedor.texto2 = {
    texto:"Curso de JavaScript Avanzado",
    colorTexto:"text-secondary fw-light",
    colorFondo:"bg-light p-3",
    elementoHTML:"h3"
}

parrafo.texto3 = {
    texto:"Aprende a programar con el lenguaje más utilizado en internet para el desarrollo frontend de sitios web.",
    colorTexto:"text-secondary fw-lighter",
    colorFondo:"bg-light p-3"
} */


// Iteradores y Generadores
const nombres = ["Bruno", "Derek", "Facundo", "Matías", "Santiago", "Catalina"];

// Empecemos por un for
//console.log(nombres);
const texto1 = document.getElementById("texto1");
let contenidoHTML = "";

// Opción #1 => Utilizar un For
/* for (let i=0; i<nombres.length; i++) {
    const elemento = nombres[i];
    console.log(elemento);
    contenidoHTML += "<p class='fw-light py-1'>" + elemento + "</p>";
} */

// Opción #2 => Utilizar un For of
/* for (const elemento of nombres) {
    console.log(elemento);
    contenidoHTML += "<p class='fw-light py-2'>" + elemento + "</p>";
} */

// Opción #3 => Utilizar el método each (método de array)
/* nombres.forEach(elemento => {
    console.log(elemento);
    contenidoHTML += "<p class='fw-light py-3'>" + elemento + "</p>";
}) */

// Iteradores
/* const iterador = nombres[Symbol.iterator]();
let finalizar = false;

while (!finalizar) {
    let elemento = iterador.next();
    console.log(elemento.value);
    finalizar = elemento.done;
    
    if (!elemento.done) {
        contenidoHTML += "<p class='fw-light py-3'>" + elemento.value + "</p>";
    }
} */

// Generadores
/* const generador = function * (array) {
    for (const elemento of array) {
        yield elemento
    }
}

const nombresIterables = generador(nombres);

const obtenerNombre = () => {
    let elemento = nombresIterables.next();
    console.log(elemento);
    
    if (!elemento.done) {
        document.getElementById("texto1").innerHTML = "<p class='fw-light py-3'>" + elemento.value + "</p>";
    }
} */


// API Storage
/* localStorage.setItem("nombre", "Matias");
localStorage.setItem("apellido", "Quinteros");
localStorage.setItem("email", "matiquinteros@gmail.com");
localStorage.setItem("edad", 30);
console.log(localStorage.getItem("nombre") + " " + localStorage.getItem("apellido"));
//localStorage.removeItem("email");
//localStorage.clear(); // Elimina todas las localStorage */

/* const guardarDatos = () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const resultado = document.getElementById("resultado");
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("apellido", apellido.value);
    resultado.innerHTML = "Los datos fueron guardados correctamente!";
    nombre.value = "";
    apellido.value = "";
}

const recuperarDatos = () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const resultado = document.getElementById("resultado");
    nombre.value = localStorage.getItem("nombre");
    apellido.value = localStorage.getItem("apellido")   
    resultado.innerHTML = "Los datos fueron cargados correctamente!";
}

const borrarDatos = () => {
    localStorage.removeItem("nombre");
    localStorage.removeItem("apellido");
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Los datos fueron eliminados correctamente!";
} */

// Versión #2
/* const guardarDatos = () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const sexo = document.getElementById("sexo");
    const datos = {nombre:nombre.value, apellido:apellido.value, email:email.value, telefono:telefono.value, sexo:sexo.value};
    //console.log(datos);
    localStorage.setItem("datos", JSON.stringify(datos));
    resultado.innerHTML = "Los datos fueron guardados correctamente!";
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    telefono.value = "";
    sexo.value = "";
}

const recuperarDatos = () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const sexo = document.getElementById("sexo");
    const datos = JSON.parse(localStorage.getItem("datos"));
    //console.log(datos);
    nombre.value = datos.nombre;
    apellido.value = datos.apellido;
    apellido.value = datos.apellido;
    email.value = datos.email;
    telefono.value = datos.telefono;
    sexo.value = datos.sexo;
    resultado.innerHTML = "Los datos fueron cargados correctamente!";
}

const borrarDatos = () => {
    localStorage.removeItem("datos");
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Los datos fueron eliminados correctamente!";
} */

// Versión #3 - Refactorizando Código
const guardarDatosLS = (datos) => {
    localStorage.setItem("datos", JSON.stringify(datos));
}

const recuperarDatosLS = () => {
    return JSON.parse(localStorage.getItem("datos"));
}

const mostrarResultado = (texto) => {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = texto;
}

const obtenerCampos = () => {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const sexo = document.getElementById("sexo");

    return {nombre, apellido, email, telefono, sexo};
}

const asignarValoresCampos = (datos) => {
    const {nombre, apellido, email, telefono, sexo} = obtenerCampos();
    nombre.value = datos.nombre;
    apellido.value = datos.apellido;
    apellido.value = datos.apellido;
    email.value = datos.email;
    telefono.value = datos.telefono;
    sexo.value = datos.sexo;
}

const vaciarCampos = () => {
    const {nombre, apellido, email, telefono, sexo} = obtenerCampos();
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    telefono.value = "";
    sexo.value = "";
}

const guardarDatos = () => {
    const {nombre, apellido, email, telefono, sexo} = obtenerCampos();
    const datos = {nombre:nombre.value, apellido:apellido.value, email:email.value, telefono:telefono.value, sexo:sexo.value};
    guardarDatosLS(datos);
    mostrarResultado("Los datos fueron guardados correctamente!");
    vaciarCampos();
}

const recuperarDatos = () => {
    const {nombre, apellido, email, telefono, sexo} = obtenerCampos();
    const datos = recuperarDatosLS();
    asignarValoresCampos(datos);
    mostrarResultado("Los datos fueron cargados correctamente!");
}

const borrarDatos = () => {
    localStorage.removeItem("datos");
    vaciarCampos();
    mostrarResultado("Los datos fueron eliminados correctamente!");
}