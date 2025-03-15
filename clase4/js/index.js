const inicio = document.getElementById("inicio");
const laEmpresa = document.getElementById("laEmpresa");
const servicios = document.getElementById("servicios");
const contacto = document.getElementById("contacto");

// SPA - Opción #1 => Modificar contenido html vía JS
/* const obtenerPagina = (id) => {
    const contenido = document.getElementById("contenido");
    const url = Router.find(item => item.path == id);
    contenido.innerHTML = url.page;
} 

inicio.addEventListener("click", () => {
    obtenerPagina(inicio.id);
})

laEmpresa.addEventListener("click", () => {
    obtenerPagina(laEmpresa.id);
})

servicios.addEventListener("click", () => {    
    obtenerPagina(servicios.id);
})

contacto.addEventListener("click", () => {
    obtenerPagina(contacto.id);
}) */


// SPA - Opción #2 => Cargar contenido de un pagina HTML y modificamos el contenido de un elemento HMTL
const obtenerPagina = (id) => {
    const contenido = document.getElementById("contenido");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", id);
    xhr.addEventListener("load", () => {       
        contenido.innerHTML = xhr.response;
    })
    xhr.send(); 
}

inicio.addEventListener("click", () => {
    obtenerPagina("inicio.html");
})

laEmpresa.addEventListener("click", () => {
    obtenerPagina("la-empresa.html");
})

servicios.addEventListener("click", () => {    
    obtenerPagina("servicios.html");
})

contacto.addEventListener("click", () => {
    obtenerPagina("contacto.html");
})

// Cuando se termina de cargar la página, inmediatamente ejecuta esta función
// Opción #1 => agregando el listener "load"
window.addEventListener("load", () => {
    obtenerPagina("inicio.html");
})

// Opción #2 => Modificando la propiedad "onload"
/* window.onload = () => {
    obtenerPagina("inicio.html");
} */
