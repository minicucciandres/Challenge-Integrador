const express = require('express');
const router = express.Router();

const authControllers = {
loginView: (req,res) => res.render('./auth/login.ejs'),
loginUser:(req,res) => res.send('resolver el login'),
registerView:(req,res) => res.render('./auth/register.ejs'),
registerUser:(req,res) => res.send('Route for register user'),
logoutUser:(req,res) => res.send('Route for logout'),

}

module.exports= authControllers;