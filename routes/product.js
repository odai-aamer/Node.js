const express = require('express');

const productController = require('../controllers/product');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({message : 'message'});
});

// GET /products
router.get('/products', productController.getProducts);

// GET /creative-products
router.get('/creative-products', productController.getCreativeProducts);


// POST /product
router.post('/product', productController.createProduct);

// POST /creative-product
router.post('/creative-product', productController.createCreativeProduct);

module.exports = router;
