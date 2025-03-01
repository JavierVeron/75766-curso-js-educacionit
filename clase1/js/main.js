// Tipos Primitivos
/* let valorString = "10";
let valorNumber = 10;
let valorBoolean = true;
let valor;

console.log(valorString);
console.log(typeof(valorString));
console.log(valorNumber);
console.log(typeof(valorNumber));
console.log(valorBoolean);
console.log(typeof(valorBoolean));
console.log(valor); // undefined
console.log(typeof(valor));

if (valor == undefined) {
    alert("Error! La variable valor debería tener un valor asignado!")
} */


// Diferencia entre let/var o const
/* let nombre = "Facundo Sotelo"; // es una variable (se puede modificar)
console.log(nombre);
nombre = "Lionel Messi";
console.log(nombre);
const nombre2 = "Facundo Sotelo 2"; // es una constante (no se puede modificar)
console.log(nombre2);
nombre2 = "Lionel Messi 2";
console.log(nombre2); */


// Objetos => Son un conjunto de datos agrupados en una variable. Se definen entre llaves {}
/* // Declarar un objeto (siempre con const)
const auto = {marca:"Audi", modelo:"A3", motor:1.8, precio:40000, vendido:false};
console.log(auto);
console.log("Marca: " + auto.marca);
console.log("Modelo: " + auto.modelo);
//alert(auto.marca + " " + auto.modelo);
//auto = "Fiat 128"; // Pisar el contenido del Objeto con un valor String
//console.log(auto);
//console.log(auto.marca);
// LAS PROPIEDADES DE LOS OBJETOS "SON MUTABLES"
auto.precio = 45000 // Asignando/Modificando el contenido de la propiedad precio
auto.vendido = true
auto.color = "Negro"
console.log(auto); */


// Arrays => Son un conjuto de datos agruapados en un arreglo o matriz de una dimensión. Se definen entre corchetes []
/* const cajonera = ["cubiertos", "individuales", "manteles", "utensillos de cocina"];
console.log(cajonera);
console.log(cajonera[2]);
//cajonera = "Muebles de Cocina"; // Pisar el contenido del Array por un valor String
//console.log(cajonera[2]);
// LAS POSICIONES DEL ARRAY "SON MUTABLES"
cajonera[2] = "Tuppers";
console.log(cajonera); */


// Objeto con propiedades mixtas (Objetos y Arrays)
/* const autos = ["Fiat Duna", "Fiat Palio HLX", "Chery QQ", "Chevrolet Agile"];
const ubicacion = {ciudad:"Bella Vista", provincia:"Buenos Aires"}
const persona = {nombre:"Javier", apellido:"Veron", vehiculos:autos, ubicacion:ubicacion};
console.log(persona);
console.log(persona.ubicacion.ciudad);
console.log(persona.vehiculos[2]); */


// Arrays con Objetos
/* const bebidas = [
    {id:1, nombre:"Coca Cola", precio:2000},
    {id:2, nombre:"Pepsi", precio:1800},
    {id:3, nombre:"Coca Cola Zero", precio:1900},
    {id:4, nombre:"Pepsi Black", precio:1700}
]

console.log(bebidas);
console.log(bebidas[2].nombre + " $" + bebidas[2].precio); */


// Funciones
/* // Opción #1 => Definición clásica
function saludar() {
    alert("Hola a Todos! #1")
} */

// Opción #2 => Función anónima
/* const saludar = function() {
    alert("Hola a Todos! #2")
} */

// Opción #3 => Función Flecha o Arrow Functión
/* const saludar = () => {
    alert("Hola a Todos! #3")
} */

//saludar = "Facu Soteldo" // Pisar el contenido de la Función con un valor String

//saludar();

// BUENAS PRÁCTICA: OBJETOS, ARRAYS Y FUNCIONES SIEMPRE SE DECLARAN COMO CONSTANTES (CONST)


// Variables por Valor y Valores por Referencia
// Valores por Copia
/* let nombre = "Matias Quinteros";
let nombre2 = nombre; // Copiar
console.log(nombre);
console.log(nombre2);
nombre = "Rodrigo Zungri";
console.log(nombre);
console.log(nombre2); */

// Valores por Referencia
// Objetos
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000};
const bebida2 = bebida1; // bebida2 tiene el valor por referencia de bebida1
console.log(bebida1);
console.log(bebida2);
bebida1.precio = 4000;
bebida2.nombre = "Seven Up";
console.log(bebida1);
console.log(bebida2); */

// Arrays
/* const bebidas1 = ["Coca Cola", "Pepsi", "Coca Cola Zero", "Pepsi Black"];
const bebidas2 = bebidas1; // bebidas2 tiene el valor por referencia de bebidas1
console.log(bebidas1);
console.log(bebidas2);
bebidas1[0] = "Seven Up";
bebidas2[3] = "Sprite";
console.log(bebidas1);
console.log(bebidas2); */


// Operador Spread en Objetos (desparramar propiedades de un objeto en un nuevo objeto)
/* const bebida1 = {id:1, nombre:"Coca Cola", precio:2000};
const bebida2 = {categoria:"bebidas", ...bebida1, nombre:"Cunnington Cola"}; // Desparramar las propiedes del objeto bebida1 en un nuevo objeto llamado bebida2
//const bebida3 = {id:bebida2.id, nombre:bebida2.nombre, precio:5000};
console.log(bebida1);
console.log(bebida2);
bebida1.precio = 4000;
bebida2.nombre = "Seven Up";
console.log(bebida1);
console.log(bebida2); */

// Operador Spread en Array (desparramar elementos de un array en un nuevo array)
/* const bebidas1 = ["Coca Cola", "Pepsi", "Coca Cola Zero", "Pepsi Black"];
const bebidas2 = ["Paso de los Toros", ...bebidas1, "Coca Cola", "Pritty Limón"]; // Desparramar los elementos del array bebidas1 en un nuevo array llamado bebidas2
console.log(bebidas1);
console.log(bebidas2);
bebidas1[0] = "Seven Up";
bebidas2[3] = "Sprite";
console.log(bebidas1);
console.log(bebidas2); */


// BOM
// Obtengo la posicion
/* window.navigator.geolocation.getCurrentPosition((posicion) => {
    console.log(posicion);
}) */

// Definimos para la propiedad onload del navegador una función que nos muestre un mensaje
/* window.onload = () => {
    alert("Bienvenidos a Educación IT")
} */


// DOM
// getElemenyById => Referencia a UN (UNO) elemento html por medio de su ID
/* let academia = document.getElementById("academia");
console.log(academia);
console.log(typeof academia);
//academia.innerHTML = "EDUCACIÓN IT!!!";
// Opción #1 - Concatenando nombre de clases
//academia.className = academia.className + " text-decoration-line-through";
// Opción #2 - Array de Clases
console.log(academia.classList);
academia.classList.add("text-decoration-line-through");
academia.classList.remove("colorRojo");
academia.classList.add("colorAzul"); */

// getElementsByClassName (por clase) y getElementsByTagName (por etiqueta)
/* const paises = document.getElementsByClassName("paises");
console.log(paises);

const paises2 = document.getElementsByTagName("li");
console.log(paises2);
let pais = paises2[2];
pais.innerHTML = "Paraguay";
pais.className = "paises"; */

// QuerySelector => Referencia a un elemento html por .clase, #id y/o nombre de etiqueta
/* //const curso = document.querySelector("#curso");
//const pais = document.querySelector(".paises");
//const elemento = document.querySelector("p"); // Obtengo el primer elemento "p"
const elemento = document.querySelector("p.colorAzul"); // Obtengo el primer elemento "p" con la clase "colorAzul"
console.log(elemento); */


// QuerySelectorAll => Referencia a un conjuntos de elementos html por clase, id y/o nombre de etiqueta
/* //const paises = document.querySelectorAll(".paises");
const paises = document.querySelectorAll("li.paises");
console.log(paises); */


// Dataset
/* const nombreCurso = document.getElementById("nombre_curso");
console.log(nombreCurso);
console.log(nombreCurso.dataset.mostrar);

if (nombreCurso.dataset.mostrar != "true") {
    nombreCurso.className = "text-decoration-line-through";
}

if (nombreCurso.dataset.nuevonombre != "") {
    nombreCurso.innerHTML = nombreCurso.dataset.nuevonombre;
} */


// Get Attribute y Set Attribute
/* const link = document.getElementById("educacionit");
console.log(link.href);
link.href = "https://www.google.com.ar";
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.youtube.com"); */


// Create Element
const parrafo = document.createElement("p");
parrafo.innerHTML = "Curso de JavaScript en Educación IT";
console.log(parrafo);

// Append Child
const body = document.body;
body.appendChild(parrafo); // Agregar el nuevo párrafo al body de mi pagina

const paises = document.getElementById("paises");
console.log(paises);
const elementoLista = document.createElement("li");
elementoLista.innerHTML = "Colombia";
paises.appendChild(elementoLista);