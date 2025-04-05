// Creación de objetos
/* // Opción #1 => Objetos literales
const producto1 = {id:1, nombre:"Coca Cola", precio:2500};
// Opción #2 => Utilizando new Object
const producto2 = new Object({id:2, nombre:"Pepsi", precio:2200});
// Opción #3 => Utilizando Object create
const producto3 = Object.create({id:3, nombre:"Manaos", precio:2000}); */

/* console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(`#${producto1.id}- ${producto1.nombre.toUpperCase()} $${producto1.precio}`);
console.log(`#${producto2.id}- ${producto2.nombre.toUpperCase()} $${producto2.precio}`);
console.log(`#${producto3.id}- ${producto3.nombre.toUpperCase()} $${producto3.precio}`);

producto1.nombre = "Cunnington Cola";
producto1.precio = 2100;
console.log(producto1); */


// API Object
/* const producto3 = Object.create({
    id:3,
    nombre:"Manaos",
    precio:2000,
    get nombreProducto() {
        return this.nombre.toUpperCase();
    },
    set nombreProducto(valor) {
        this.nombre = valor;
    },
    get precioProducto() {
        return this.precio;
    },
    set precioProducto(valor) {
        this.precio = valor;
    }
});
console.log(producto3);
console.log("Nombre: " + producto3.nombreProducto);
producto3.nombreProducto = "Seven Up";
console.log(producto3);
console.log("Nombre: " + producto3.nombreProducto);
console.log(Object.getOwnPropertyDescriptor(producto3, "nombre"));
producto3.precioProducto = 1000;
//Object.defineProperty(producto3, "precio", {writable: false});
producto3.precioProducto = 500;
console.log(Object.getOwnPropertyDescriptor(producto3, "precio")); */


// Funciones Constructoras
/* const objeto1 = {id:1, nombre:"Coca Cola", precio:2500};
const objeto2 = new Object({id:1, nombre:"Coca Cola", precio:2500});
console.log(objeto1);
console.log(objeto2); */

/* const array1 = ["coca cola", "pepsi", "manaos"];
const array2 = new Array("coca cola", "pepsi", "manaos");
console.log(array1);
console.log(array2); */

// Creo una función constructora
/* function Post(idPost, tituloPost, descripcionPost) {
    this.id = idPost;
    this.titulo = tituloPost.toUpperCase();
    this.descripcion = descripcionPost;
    this.publicado = false;
}

const nuevoPost = new Post(1, "Coca Cola 1.5L", "Gaseosa American Cola 1.5 Lt. Por Mayorista Masivos. Calificación 4,5 de 5");
console.log(nuevoPost);
console.log("Titulo: " + nuevoPost.titulo);
console.log("Descripción: " + nuevoPost.descripcion);
nuevoPost.descripcion = "Sin Descripción por el momento.";
console.log("Descripción: " + nuevoPost.descripcion); */


/* function Rango(inicio, destino) {
    this.from = inicio;
    this.to = destino;
    this.seEncuentra = (valor) => {
        return ((valor >= this.from) && (valor <= this.to))
    }
    this.obtenerDestino = () => {
        return this.to;
    }
} */

/* Rango.prototype = {
    seEncuentra:(valor) => {        
        return ((valor >= this.from) && (valor <= this.to))
    }
} */

/* const nuevoRango = new Rango(10, 20);
console.log(nuevoRango);
console.log(nuevoRango.seEncuentra(12));
console.log(nuevoRango.obtenerDestino()); */


// Clases
// Opción #1 => utilizando la palabras class
/* class Cuadrado1 {
    // Definir propiedades
    constructor(ancho, alto) {
        this.ancho = ancho,
        this.alto = alto
    }

    // Definir métodos
    obtenerAnchoX2() {
        return this.ancho * 2;
    }

    obtenerAltoX2() {
        return this.alto* 2;
    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    // Defino un getter
    get area() {
        return this.calcularArea();
    }
}

// Opción #2 => utilizando una variable y asignando una class
const Cuadrado2 = class {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
}

const nuevoCuadrado1 = new Cuadrado1(40, 20);
const nuevoCuadrado2 = new Cuadrado1(50, 100);
console.log(nuevoCuadrado1);
console.log(nuevoCuadrado2);
console.log("Cuadrado1 x2: " + nuevoCuadrado1.obtenerAnchoX2() + "x" + nuevoCuadrado1.obtenerAltoX2());
console.log("Cálculo de Area (Propiedad): " + nuevoCuadrado1.area);
console.log("Cálculo de Area (Método): " + nuevoCuadrado1.calcularArea()); */



// Clases y Extends
/* class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    dormir() {
        console.log(`El animal ${this.nombre} está durmiendo.`);
    }

    hablar() {
        console.log(`El animal ${this.nombre} está haciendo ruido.`);
    }

    comer() {
        console.log(`El animal ${this.nombre} está comiendo.`);
    }
}

class Perro extends Animal {
    constructor(nombre, correa=false) {
        super(nombre);
        this.correa = correa;
    }

    hablar() {
        console.log(`El animal ${this.nombre} no habla.`);
    }

    ladrar() {
        console.log(`El animal ${this.nombre} está ladrando.`);
    }

    ponerCorrea() {
        this.correa = true;
    }

    tieneCorrea() {
        console.log(this.nombre + (this.correa ? " tiene" : " no tiene") + " correa");
    }
}

class Gato extends Animal {
    maullar() {
        console.log(`El animal ${this.nombre} está maullando.`);
    }
}

const mascota1 = new Perro("Mora", false);
console.log(mascota1);
mascota1.ladrar();
mascota1.hablar();
mascota1.ponerCorrea();
mascota1.tieneCorrea();
mascota1.dormir();
console.log(mascota1);
const mascota2 = new Gato("Benita");
mascota2.hablar();
mascota2.dormir();
mascota2.maullar(); */



const nuevoProducto = new Producto(1, "Hamburguesa con Queso", "Carne 100% vacuna, queso derretido y mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar. Un clásico que nunca pasa de moda.", 6000, "https://cache-mcd-middleware.mcdonaldscupones.com/media/image/product$kqX8TYcp/200/200/original?country=ar");
console.log(nuevoProducto);
//nuevoProducto.venderProducto();
nuevoProducto.renderProducto("imagenProducto", "contenidoProducto");