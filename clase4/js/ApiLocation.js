const url = document.getElementById("url");
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {    
    //console.log(location);
    //console.log(location.pathname);
    //modificarUrl();
    capturarParametros();
})

const modificarUrl = () => {
    location.href = url.value;
}

const capturarParametros = () => {
    //console.log(location.search);
    //console.log(new URLSearchParams(location.search));
    const parametros = new URLSearchParams(location.search);
    console.log(parametros.get("academia"));
    const contenido = document.getElementById("contenido");
    contenido.innerHTML = `<h1>${parametros.get("academia").toUpperCase()}</h1>
    <p>Curso: <b>${parametros.get("curso").toUpperCase()}</b></p>
    <p>Carrera: <b>${parametros.get("carrera").toUpperCase()}</b></p>`;
}