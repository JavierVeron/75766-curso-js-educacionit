const panelOrigen = document.getElementById("panelOrigen");
const panelDestino = document.getElementById("panelDestino");

// Mover y Soltar imágenes de un contendor a otro
/* panelOrigen.addEventListener("drag", (e) => {
    const elemento = e.target;
    panelDestino.addEventListener("dragleave", (e) => {
        panelDestino.appendChild(elemento);
    })
})

panelDestino.addEventListener("drag", (e) => {
    const elemento = e.target;
    panelOrigen.addEventListener("dragleave", (e) => {
        panelOrigen.appendChild(elemento);
    })
}) */



panelOrigen.addEventListener("drag", (e) => {
    const elemento = e.target;
    
    panelDestino.addEventListener("dragleave", (e) => {
        panelDestino.appendChild(elemento);
        elemento.style.border = "2px solid black";
        panelDestino.style.backgroundColor = elemento.style.backgroundColor;
    })
})

/* panelDestino.addEventListener("drag", (e) => {
    const elemento = e.target;

    panelOrigen.addEventListener("dragleave", (e) => {
        panelOrigen.appendChild(elemento);
        elemento.style.border = "none";
        panelOrigen.style.backgroundColor = elemento.style.backgroundColor;
    })
}) */