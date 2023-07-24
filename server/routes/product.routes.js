const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/http/product.controller.http');

router.get('/products/:videoId', (req, res) => {
    ProductController.getAllProductLists(req, res);
});

module.exports = router;