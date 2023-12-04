const express = require('express');
const shopControllers = require('../../controllers/shop/shopControllers');
const router = express.Router();

// en el app del router tiene /shop

router.get('/',shopControllers.shopView);
router.get('/item/:id',shopControllers.itemView);
router.post('/item/:id/add',shopControllers.addtocart);

router.get('/cart',shopControllers.cartView);
router.post('/cart',shopControllers.checkout);

module.exports = router;

// - GET -> /shop
// - GET -> /shop/item/:id
// - POST -> /shop/item/:id/add
// - GET -> /shop/cart
// - POST -> /shop/cart