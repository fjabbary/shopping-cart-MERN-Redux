const express = require('express')
const router = express.Router();

const { getAllProducts, getProductById } = require('../controller/productsController')

//@desc GET all products from db
//@route GET /api/products
router.get('/', getAllProducts)

//@desc GET a product by id from db
//@route GET /api/products
router.get('/:id', getProductById)

module.exports = router;