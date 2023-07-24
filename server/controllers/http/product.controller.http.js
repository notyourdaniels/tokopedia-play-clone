const ProductService = require('../../services/product.service');

//TODO: Fixing JSON response content, fixing error handling message
class ProductController {
    static async getAllProductLists(req, res) {
        try {
            const videoId = req.params.videoId;
            const products = await ProductService.getAllProductLists(videoId);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = ProductController;