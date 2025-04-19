// Declarando variables
const numero1:number = 10
//const numero2:number = "hola" // no permitido
const texto1:string = "hola" // permitido
//const isLoggedIn:boolean = "true"; // no permitido
const isLoggedIn:boolean = true; // permitido

// Declarando funciones
const sumar = (n1:number, n2:number):number => {
    return n1 + n2
}

//sumar("hola", "cómo estás?"); // no permitido
//sumar(20, "cómo estás?"); // no permitido
//sumar("hola", 50); // no permitido
sumar(20, 50); // permitido

interface Post {
    titulo:string,
    descripcion:string
}

const nuevoPost:Post = {
    titulo:"Curso de Js Avanzando",
    descripcion:"Aprenderas a programar en JS"
}