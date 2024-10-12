const express = require('express');
const router = express.Router();

const ProductsControllers = require("../controllers/ProductsControllers.js")
const controllers = new ProductsControllers()
/* GET users listing. */
router.get('/', controllers.getProductsPage);
router.post("/cart", controllers.postCartProduct)

module.exports = router;
