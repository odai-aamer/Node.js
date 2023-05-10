const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

// GET /products
router.get('/products', productController.getProducts);

// GET /creative-products
router.get('/creative-products', productController.getProducts);


// POST /product
router.post('/product', productController.createProduct);

// POST /creative-product
router.post('/creative-product', productController.createCreativeProduct);

module.exports = router;