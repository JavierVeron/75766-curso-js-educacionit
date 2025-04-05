class Producto {
    constructor(id, nombre, descripcion, precio, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.vendido = false;
    }

    ponerImagenProducto(elementoId) {
        const imagenHTML = document.getElementById(elementoId);
        const imagen = document.createElement("img");
        imagen.src = this.imagen;
        imagenHTML.appendChild(imagen);
    }

    ponerContenidoProducto(elementoId) {
        const contenidoHTML = document.getElementById(elementoId);
        contenidoHTML.innerHTML = `<h1>${this.nombre}</h1>
        <p>${this.descripcion}</p>
        <h3>$${this.precio}</p>
        <p><button class="btn ${this.vendido ? "btn-secondary" : "btn-warning"}">${this.vendido ? "No disponible" : "Agregar al Carrito"}</button></p>`
    }

    renderProducto(idElementoImagen, idElementoContenido) {
        this.ponerImagenProducto(idElementoImagen);
        this.ponerContenidoProducto(idElementoContenido);
    }

    venderProducto() {
        this.vendido = true;
    }
}