// Validación del Formulario
// Basado en Programación imperativa
/* function validarFormulario() {
    const campoNombre = document.getElementById("nombre");
    const campoEmail = document.getElementById("email");
    const resultado = document.getElementById("resultado");

    if (campoNombre.value == "") {
        resultado.innerHTML = `<div class="alert alert-danger" role="alert">Error! Complete el Campo Nombre!</div>`;
        return false;
    }

    if (campoEmail.value == "") {
        resultado.innerHTML = `<div class="alert alert-danger" role="alert">Error! Complete el Campo Email!</div>`;
        return false;
    }

    resultado.innerHTML = `<div class="alert alert-success" role="alert">Gracias! Hemos recibido tus datos!</div>`;
    campoNombre.value = "";
    campoEmail.value = "";
} */


// Basado en Programación Delarativa
function mostrarMensaje(texto, tipo) {
    const resultado = document.getElementById("resultado");
    let clase;

    if (tipo == "error") {
        clase = "alert-danger";
    } else {
        clase = "alert-success";
    }

    resultado.innerHTML = `<div class="alert ${clase}" role="alert">${texto}</div>`;
}

/* function validarCampoNombre() {
    const campoNombre = document.getElementById("nombre");

    if (campoNombre.value == "") {
        mostrarMensaje("Error! Complete el Campo Nombre!", "error");
        return false;
    } else {
        return true;
    }
}

function validarCampoEmail() {
    const campoEmail = document.getElementById("email");

    if (campoEmail.value == "") {
        mostrarMensaje("Error! Complete el Campo Email!", "error");
        return false;
    } else {
        return true;
    }
} */

function validarCampo(id, nombreCampo) {
    const campo = document.getElementById(id);

    if (campo.value == "") {
        mostrarMensaje("Error! Complete el Campo " + nombreCampo, "error");
        return false;
    } else {
        return true;
    }
}

function vaciarCampos() {
    const campoNombre = document.getElementById("nombre");
    const campoEmail = document.getElementById("email");
    campoNombre.value = "";
    campoEmail.value = "";
}

function validarFormulario() {
    if (!validarCampo("nombre", "Nombre")) {
        return false;
    }

    if (!validarCampo("email", "Email")) {
        return false;
    }

    mostrarMensaje("Gracias! Hemos recibido tus datos!", "ok");
    vaciarCampos();
}


// Funciones - 3 formas de declarar una función
// Opción #1 => palabra reserva function
/* function saludar() {
    alert("Hola a Todos! #1");
} */

// Opción #2 => función anónima, se debe utilizar una variable o constante para guardar la función. Se recomienda que las funciones se declaren en constantes.
/* const saludar = function () {
    alert("Hola a Todos! #2");
} */

// Opción #3 => función flecha (o arrow function). Se recomienda que las funciones se declaren en constantes.
/* const saludar = () => {
    alert("Hola a Todos! #3");
}

saludar(); */


// Efectos secundarios o Side effects
/* function dividirPorCero() {
    const search = new URLSearchParams(location.search);
    let n1 = Number(search.get("n1"));
    let n2 = Number(search.get("n2"));

    return n1/n2;
}

console.log(dividirPorCero()); */


// Funciones de Orden Superior => Funciones que pueden devolver un valor u otra función
/* function mayorQue(valorY) {
    return (valorX) => (valorX > valorY);
}

const mayorQue10 = mayorQue(10); // (x) => x => 10
let valor1 = mayorQue10(20); // 20 => 20 > 10 => true
let valor2 = mayorQue10(30); // 30 => 30 > 10 => true
let valor3 = mayorQue10(5); // 5 => 5 > 10 => false
console.log(valor1);
console.log(valor2);
console.log(valor3); */


// Nivel Táctico
// Composición (o también conocido como Funciones de Orden Superior) => Funciones que devuelven otra Función
/* function crearReporteNotas(notas) {
    return function(notaMinima) {
        return notas.filter(item => item >= notaMinima)
    }
}

const arrayNotas = [4, 7, 8, 6];
const reporteNotas = crearReporteNotas(arrayNotas);
console.log(reporteNotas(5));
console.log(reporteNotas(7)); */

// Callbacks => Funciones que reciben como parámetro otra Función
const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2200, stock:2},
    {id:2, nombre:"Pepsi", precio:2000, stock:2},
    {id:3, nombre:"Manaos", precio:1700, stock:3}
]

// Función de Callback
/* const buscar = (item, nombre) => {    
    if (item.nombre == nombre) {        
        return true;
    }
}

const buscarElemento = (array, funcion, nombre) => {
    for (const elemento of array) {
        if (funcion(elemento, nombre)) {
            return elemento;
        }
    }
}

const resultado = buscarElemento(bebidas, buscar, "Pepsi");
console.log(resultado);
const resutado2 = bebidas.find(item => item.nombre == "Pepsi");
const resutado3 = bebidas.find(item => buscar(item, "Pepsi"));
console.log(resutado2);
console.log(resutado3); */

// Recursividad => Funciones que se llaman a ellas mismas
/* function buscarProducto(valor, posicion, items) {
    if (posicion == items.length) {
        console.log("Fin del Array");
        return undefined;
    }

    let item = items[posicion];

    if (item.nombre == valor) {
        console.log("Objeto encontrado");
        return item;
    }

    console.log("Incremento Posición");
    posicion++;

    return buscarProducto(valor, posicion, items);
}

const resultado = buscarProducto("Pepsi", 0, bebidas);
console.log(resultado); */

// Pipes => Funciones que se ejecutan, una a continuación de otra
/* function filtro(callback) {
    return async function(input) {
        return input.filter(callback)
    }
}

function mapeo(callback) {
    return async function(input) {
        return input.map(callback)
    }
}

function reduccion(callback) {    
    return async function(input) {
        return input.reduce(callback)
    }
}

function pipes(stages) {
    return async function(input) {
        let result = input;

        for (const i in stages) {       
            const currentStage = await stages[i];            
            result = currentStage(result);
        }
    }
}

const mapFilterPipe = pipes([
    mapeo(item => ({id:item.id, nombre:item.nombre, precio:item.precio, stock:item.stock, total:(item.precio * item.stock)})),
    filtro(item => item.total > 5000)
])

mapFilterPipe(bebidas)
.then(resultado => {
    console.log(resultado);
}) */


// Operaciones
/* const resultado = _.chunk(bebidas, 2);
console.log(resultado); */

/* const resultado = _.compact([0, 1, false, 2, '', 3, ""]);
console.log(resultado); */

/* const resultado = _.drop(bebidas, 2);
console.log(resultado); */

/* const resultado = _.dropRight(bebidas, 2);
console.log(resultado); */

/* const resultado = _.random(1, 10);
console.log(resultado);

const resultado2 = Math.floor(Math.random() * 10) + 1;
console.log(resultado2); */