const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/http/product.controller.http');

router.get('/videos/:videoId/products', (req, res) => {
    ProductController.getAllProductLists(req, res);
});

module.exports = router;