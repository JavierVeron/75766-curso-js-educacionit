// DOMContentLoaded
/* document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada sin recursos externos");
}) */

// Window Load
/* window.onload = () => {
    console.log("Página cargada!");
} */

window.addEventListener("load", () => {
    console.log("Página cargada!");
})

// Popstate
// Opción #1 => Modificando la propiedad "onpopstate"
/* window.onpopstate = () => {
    console.log("Hubo un cambio en la navegación");
} */

// Opción #2 => Modificando el Event Listener "popstate"
window.addEventListener("popstate", () => {
    console.log("Hubo un cambio en la navegación");
});