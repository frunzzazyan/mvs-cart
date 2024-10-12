const express = require('express');
const router = express.Router();

const CartController = require("../controllers/CartControllers.js")
const controllers = new CartController()
/* GET users listing. */
router.get('/', controllers.getCartPage);
router.delete("/:id",controllers.deleteCartProduct)

module.exports = router;