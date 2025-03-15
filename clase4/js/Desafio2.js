const panelDestino = document.getElementById("panelDestino");
/* panelDestino.addEventListener("dragleave", (e) => {
    console.log(e.target);
        
    const xhr = new XMLHttpRequest();
    xhr.open("GET", elemento);
    xhr.responseType = "blob";
    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    })
    xhr.send(producto);
}) */

const capturarArchivo = (event) => {
    console.log("Fichero(s) arrastrados");

    console.log(event);
    
}