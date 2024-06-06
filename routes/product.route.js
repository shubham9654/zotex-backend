const express = require('express');
const { getAllProducts, addProduct } = require('../controllers/product.controller');

const router = express.Router();

router.get('/all', getAllProducts);
router.post('/', addProduct);

module.exports = router;
