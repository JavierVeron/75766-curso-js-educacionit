// Tareas síncronas
/* console.log("1- Inicio del Programa!");
console.log("2- Procesamiento del Programa!");
console.log("3- Fin del Programa!"); */

// Tareas asíncronas
/* console.log("1- Inicio del Programa!");

setTimeout(() => {
    console.log("2- Procesamiento del Programa!");
}, 3000);

setTimeout(() => {
    console.log("3- Procesamiento del Programa!");
}, 2000);

console.log("4- Fin del Programa!"); */


// Promesas
/* const promesas = new Promise((resolve, reject) => {
    console.log("Hoy vamos al Cine!");

    // Completar la promesa
    //resolve("Sí, nos vemos a las 21!");

    // Rechazar una promesa
    reject("No, hoy no puedo! Otro día arreglamos!");
})

console.log(promesas); */

// Otro ejemplo
/* const verificarSaldo = (dinero) => {
    return new Promise((resolve, reject) => {
        if (dinero > 100000) {
            resolve("Sí, podemos salir!");
        } else {
            reject("No, no puedo salir!");
        }
    })
}

console.log(verificarSaldo(50000)); */

// Otro ejemplo
/* const division = new Promise((resolver, rechazar) => {
    const n1 = parseInt(prompt("Ingrese el valor #1"));
    const n2 = parseInt(prompt("Ingrese el valor #2"));

    if (n2 == 0) {
        rechazar("No se puede didivir por 0!")
        return false;
    }

    resolver(n1/n2);
})

console.log(division); */

/* const render = (resultado) => {    
    const content = document.getElementById("content");
    let htmlContent = `<ul id="usuarios" class="list-group">`;

    for (const elemento of resultado) {
        htmlContent += `<li class="list-group-item">${elemento.name} (${elemento.username})</li>`;
    }

    htmlContent += `</ul>`;
    content.innerHTML = htmlContent;
} */

/* const mostrarError = (mensaje) => {
    const content = document.getElementById("content");
    let htmlContent = `<div class="alert alert-danger text-center" role="alert">${mensaje}</div>`;
    content.innerHTML = htmlContent;
} */

// Llamada a una API con Promesas
/* const getAPI = (url) => {
    return new Promise((res, rej) => {
        if (url == "") {
            rej("Error! No se pudo acceder a la API!")
            return false;
        }

        const xhr = new XMLHttpRequest();
        xhr.responseType = "json";
        xhr.open("GET", url);
        xhr.send();
        xhr.addEventListener("load", () => {
            res(xhr.response);
            //render(xhr.response);
        })
    })
} */

//console.log(getAPI(""));
/* getAPI("https://jsonplaceholder.typicode.com/users")
.then(resultado => {
    render(resultado);
})
.catch(resultado => {
    mostrarError(resultado);
})
.finally(() => {
    console.log("Proceso terminado!");
}) */


// Método Fetch (utilizando método then y catch)
/* const obtenerPosts = (url) => {
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })   
}

obtenerPosts("https://jsonplaceholder.typicode.com/users"); */


// Async / Await
/* const obtenerPosts = async (url) => {
    const response = await fetch(url);
    const data = await response.json(); 

    return data;
}

const filtrarUsuario = async (usuario, usuarios) => {
    const postFiltro = usuarios.filter(item => item.name.toLowerCase().includes(usuario.toLowerCase()));

    return postFiltro;
}

const proceso = async () => {
    const posts = await obtenerPosts("https://jsonplaceholder.typicode.com/users");
    const postFiltrado = await filtrarUsuario("schulist", posts);
    render(postFiltrado);
}

proceso(); */


// Pipeline
/* const obtenerNumeros = () => {
    const n1 = parseInt(prompt("Ingrese el valor #1"));
    const n2 = parseInt(prompt("Ingrese el valor #2"));

    return {n1,n2}
}

const validarSegundoNumero = (objeto) => {
    if (objeto.n2 == 0) {
        throw new Error("Error! El segundo número es un 0!");
    }

    return objeto;
}

const dividir = (objeto) => {
    return (objeto.n1 / objeto.n2);
}

const mostrarPorHTML = (texto) => {
    const content = document.getElementById("content");
    let htmlContent = `<div class="alert alert-danger text-center" role="alert">${texto}</div>`;
    content.innerHTML = htmlContent;
}

const mostrarPorConsola = (texto) => {
    console.log(texto);
}

const mostrar = (resultado, vista="html") => {
    if (vista == "html") {
        mostrarPorHTML(resultado);
    } else {
        mostrarPorConsola(resultado);
    }
} */

const mostrarResultado = (resultado) => {
    mostrarPorConsola(resultado);
}

// Ejecutar de forma tradicional
/* let resultado = obtenerNumeros();
resultado = validarSegundoNumero(resultado);
resultado = dividir(resultado);
mostrar("consola", resultado); */


// Repaso del método reduce
/* const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2200, stock:1},
    {id:2, nombre:"Pepsi", precio:2000, stock:2},
    {id:3, nombre:"Manaos", precio:1700, stock:3}
]

const resultado = bebidas.reduce((acumulador, item) => acumulador += item.precio * item.stock, 0);
console.log(resultado); */

// Función pipe
/* const pipe = (inicial, stages) => {
    return stages.reduce((resultado, stage) => stage(resultado), inicial);
}

pipe(obtenerNumeros(), [
    validarSegundoNumero, dividir, mostrar
]); */


// Transformando las funciones en promesas
const obtenerNumeros = () => {
    return new Promise((resolver) => {
        const n1 = parseInt(prompt("Ingrese el valor #1"));
        const n2 = parseInt(prompt("Ingrese el valor #2"));
    
        resolver({n1,n2});
    })
}

const validarSegundoNumero = (objeto) => {
    return new Promise((resolver, rechazar) => {
        if (objeto.n2 == 0) {
            rechazar("Error! El segundo número es un 0!");
        }
    
        resolver(objeto);
    })
}

const dividir = (objeto) => {
    return new Promise((resolver) => {
        resolver(objeto.n1 / objeto.n2);
    })
}

const mostrarPorHTML = (texto) => {
    const content = document.getElementById("content");
    let htmlContent = `<div class="alert alert-danger text-center" role="alert">${texto}</div>`;
    content.innerHTML = htmlContent;
}

const mostrarPorConsola = (texto) => {
    console.log(texto);
}

const mostrar = (resultado, vista="html") => {
    if (vista == "html") {
        mostrarPorHTML(resultado);
    } else {
        mostrarPorConsola(resultado);
    }
}

/* obtenerNumeros()
.then(resultado => {
    return validarSegundoNumero(resultado);
})
.then(resultado => {
    return dividir(resultado);
})
.then(resultado => {
    mostrar(resultado);
})
.catch(resultado => {
    mostrar(resultado);
}) */

// Versión más simplificada
/* obtenerNumeros()
.then(validarSegundoNumero)
.then(dividir)
.then(mostrar)
.catch(mostrar); */


// Operaciones
/* fetch("https://fakestoreapi.com/products")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
}) */

// Versión simplificada
/* fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => console.log(data)) */

const render = (resultado) => {    
    const content = document.getElementById("content");
    let htmlContent = "";

    for (const elemento of resultado) {
        htmlContent += `<div class="col-md-3">
            <div class="card border-0 mb-3">
                <img src="${elemento.image}" class="img-fluid" alt="${elemento.title}">
                <div class="card-body">
                    <h5 class="card-title">${elemento.title}</h5>
                    <p class="card-text">$${elemento.price}</p>
                </div>
            </div>
        </div>`;
    }
    
    content.innerHTML = htmlContent;
}

const filtrarPorNombreProducto = (nombre, productos) => {
    return new Promise((resolver, rechazar) => {
        if (nombre == "") {
            rechazar("Error! No se ingresó ningún Nombre de Producto!");
        }

        const arrayFiltrado = productos.filter(item => item.title.toUpperCase().includes(nombre.toUpperCase()));
        resolver(arrayFiltrado);
    })
}

fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => filtrarPorNombreProducto("women", data))
.then(result => {    
    render(result);
})