const renderProductos = () => {
    fetch("http://localhost:3000/productos")
    .then(response => response.json())
    .then(data => {
        let contenidoHTML = "";
        
        for (const item of data) {
            contenidoHTML += `<div class="col-md-3">
            <div class="card">
            <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
            <div class="card-body text-center">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">$${item.precio}</p>
                <a href="#" class="btn btn-primary fw-bold">AGREGAR</a>
            </div>
            </div>
            </div>`;
        }

        document.getElementById("contenido").innerHTML = contenidoHTML;
    })
}

const agregarProducto = () => {
    const nombre = document.getElementById("nombre");
    const precio = document.getElementById("precio");
    const imagen = document.getElementById("imagen");
    const producto = {nombre:nombre.value, precio:precio.value, imagen:imagen.value};
    //console.log(producto);

    fetch("http://localhost:3000/productos", {
        method:"POST",
        headers:{'Content-type':'application/json; charset=UTF-8'},
        body:JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

renderProductos();