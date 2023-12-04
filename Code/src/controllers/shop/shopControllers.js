const express = require('express');
const router = express.Router();

const fs = require('fs');
// Ruta al archivo JSON
const rutaArchivo = './src/models/datos.json';



const shopControllers = {


//itemView:(req,res) => res.render(`Route para buscar y devolver un producto desde un ID ${req.params.id}`),
itemView:(req,res) => res.render('./shop/item.ejs'),
addtocart:(req,res) => res.send('Route para añadir el item actual al carrito'),

shopView:(req,res) => {
    // Lee el contenido del archivo
let result='';
fs.readFile(rutaArchivo, 'utf8', (error, data) => {
    if (error) {
      console.error('Error al leer el archivo:', error);
      return;
    }
  
    // Parsea el contenido como un objeto JSON
    try {
      const productos = JSON.parse(data);
      console.log('Contenido del archivo JSON:', productos);
      res.render('./shop/shop.ejs',{productos});
    } catch (parseError) {
      console.error('Error al analizar el JSON:', parseError);
    }
  });

    
},

cartView:(req,res) => res.render('./shop/cart.ejs'),
checkout:(req,res) => res.send('Route for go to cheackout page'),

}

module.exports= shopControllers;