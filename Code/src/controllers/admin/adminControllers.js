const express = require('express');
const router = express.Router();

const adminControllers = {
adminView:(req,res) => res.render('./admin/admin.ejs'),
createView:(req,res) => res.render('./admin/create.ejs'),
createItem:(req,res) => res.send('Route para añadir el item actual sl carrito'),
editView:(req,res) => res.render('./admin/edit.ejs'),
editItem:(req,res) => res.send('Route for go to cheackout page'),
deleteItem:(req,res) => res.send('Route for go to cheackout page'),
}

module.exports= adminControllers;