// Crear un Servidor HTTP con el módulo http (módulo nativo de Node)
/* var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('<h1>Educación IT!</h1>'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080  */

import express from "express"

const app = express();
const port = 8080;
app.listen(port, () => {
    console.log("Servidor activo: " + port);  
})

//const producto = {id:1, nombre:"Coca Cola", precio:3000};
const productos = [
    {id:1, nombre:"Coca Cola", precio:3000},
    {id:2, nombre:"Pepsi", precio:2500},
    {id:3, nombre:"Manaos", precio:2000}
]

// Listar todos los productos
app.get("/", (req, res) => {
    //res.send('<h1>Educación IT!</h1>');
    //console.log(productos);
    res.send(productos);
})

// Buscar el producto por su ID
app.get("/:id", (req, res) => {
    const {id} = req.params; //2
    const producto = productos.find(item => item.id == id);

    if (producto) {
        res.send(producto);
    } else {
        res.status(400).send({estado:"error", mensaje:"Error! No se encuentra el producto con el ID #" + id});
    }
})