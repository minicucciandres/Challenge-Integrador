const express = require('express');
const router = express.Router();

const authControllers = require('../../controllers/auth/authControllers');
// en el app del router tiene /auth

router.get('/login',authControllers.loginView);
router.post('/login',authControllers.loginUser);
router.get('/register',authControllers.registerView);
router.post('/register',authControllers.registerUser);
router.get('/logout',authControllers.logoutUser);

module.exports = router;
// Auth Routes:
// - GET -> /auth/login
// - POST -> /auth/login
// - GET -> /auth/register
// - POST -> /auth/register
// - GET -> /auth/logout