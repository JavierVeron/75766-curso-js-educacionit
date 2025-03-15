const btnAtras = document.getElementById("btnAtras");
const btnCargar = document.getElementById("btnCargar");
const btnAdelante = document.getElementById("btnAdelante");

const navegar = (ruta) => {
    history.pushState({}, "", ruta); // Modificar la ruta del navegador (no redirecciona)
    //location.href = ruta; // Redireccionar a la ruta especificada
}

btnAtras.addEventListener("click", () => {
    history.go(-1);
})

btnCargar.addEventListener("click", () => {
    navegar("servicios.html");
})

btnAdelante.addEventListener("click", () => {
    history.go(1);
})