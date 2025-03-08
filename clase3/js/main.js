// Creamos un objeto XMLHttpRequest
/* const xhr = new XMLHttpRequest();

console.log(xhr.readyState); // Devuleve 0

xhr.open("GET", "https://fakestoreapi.com/products");

console.log(xhr.readyState); // Devuleve 1

xhr.addEventListener("readystatechange", () => {
    console.log(xhr.readyState);
})

xhr.addEventListener("load", () => {
    console.log("Recurso cargado!");
    console.log(xhr.response); // Obtengo un string con toda la información junta
    console.log(JSON.parse(xhr.response)); // Parsear la información recibida en formato JSON
})

xhr.send(); */


// Operaciones AJAX
// Opción #1
/* const getJSON = ({url, onload}) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        onload(xhr.response);
    })
    xhr.send();
}

const renderProducts = (products) => {
    const content = document.getElementById("content");
    let contentHTML = "";

    for (const product of products) {
        contentHTML += `<div class="col-md-2">
            <div class="card border-0 text-center mb-3">
                <img src="${product.image}" class="img-fluid" alt="${product.title}" />
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">$${product.price}</p>
                </div>
            </div>
        </div>`;
    }

    content.innerHTML = contentHTML;
}

getJSON({
    url:"https://fakestoreapi.com/products",
    onload:(resultado) => {
        console.log(resultado);
        renderProducts(resultado);
    }
}) */

// Opción #2
/* const getJSON = ({url, onload}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "document";
    xhr.open("GET", url);
    xhr.addEventListener("load", () => {
        onload(xhr.response);
    })
    xhr.send();
}

getJSON({
    url:"https://jsonplaceholder.typicode.com",
    onload:(resultado) => {
        console.log(resultado);
    }
}) */


// Opción #3
/* const getJSON = ({url, onload}) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        onload(xhr.response);
    })
    xhr.send();
}

getJSON({
    url:"https://jsonplaceholder.typicode.com/users",
    onload:(resultado) => {
        document.getElementById("content").innerHTML = resultado
    }
}) */


// Envío de Datos (POST) => en formato JSON
/* const sendJSON = ({url, onload}) => {
    const producto = {title:"Hamburguesa con Queso", price:8000, description:"Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", category:"hamburguesas", image:"https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar"};
    //console.log(producto);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        onload(xhr.response);
    })
    xhr.send(producto);
}

sendJSON({
    url:"https://fakestoreapi.com/products",
    onload:(resultado) => {
        console.log(resultado);
        if (resultado.id) {
            console.log("El producto se creó correctamente!");
        }
    }
}) */


// Envío de Datos (POST) => desde un Formulario HTML
// Opción #1 (creando un objeto)
/* const enviarForm = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //console.log(email, password);
    const data = {email:email, password:password};
    //console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://fakestoreapi.com/products");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    })
    xhr.send(data);
} */

// Opción #2 (enviado los datos del Form con FormData)
/* const enviarForm = () => {
    const data = new FormData();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    data.append("email", email);
    data.append("password", password);
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://fakestoreapi.com/products");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    })
    xhr.send(data);
} */


// Computar el estado de una petición
/* const enviarForm = () => {
    const data = new FormData();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    data.append("email", email);
    data.append("password", password);
    console.log(data);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://fakestoreapi.com/products");
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    })
    xhr.addEventListener("progress", (e) => {
        if (e.lengthComputable) {
            console.log(e.loaded, e.total);
        }
    })
    xhr.send(data);
} */


// Manejo de Archivos
/* const enviarForm = () => {
    const form1 = document.getElementById("form1");  
    const data = new FormData(form1);
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const imagen = document.getElementById("imagen").value;
    data.append("email", email);
    data.append("password", password);
    data.append("imagen", imagen);
    console.log(data);
    const xhr = new XMLHttpRequestUpload();
    xhr.open("POST", "https://fakestoreapi.com/products");
    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    })
    xhr.send(data);
} */


// Recupero de Datos Binarios
/* const obtenerDatos = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar");
    xhr.overrideMimeType("text/plain; charset=x-user-defined");
    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    })
    xhr.send();
}

obtenerDatos(); */


// Creando un DOMString
/* const obtenerDatos = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fakestoreapi.com/docs");
    xhr.responseType = "blob";
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            var url = URL.createObjectURL(xhr.response);
            console.log(url)
        }
    })
    xhr.send();
}

obtenerDatos(); */


// Drag & Drop
const dropzone = document.getElementById("dropzone");
dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.className = "col-md-6 bg-secondary";
    console.log("Estoy sobre el DIV destino!");
    //console.log(e.target);
})
dropzone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.className = "col-md-6 bg-body-tertiary";    
})
dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Solté el elemento!"); 
})













