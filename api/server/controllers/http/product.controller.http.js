const ProductService = require('../../services/product.service');

class ProductController {
    static async getAllProductLists(req, res) {
        try {
            const videoId = req.params.videoId;
            const products = await ProductService.getAllProductLists(videoId);
            if (products.idError) {
                res.status(404).json(
                    {
                        status: 'error',
                        message: products.idError
                    }
                )
            } else {
                res.status(200).json({
                    status: 'success',
                    data: products
                });
            }
        } catch (error) {
            res.status(500).json(
                {
                    status: 'error',
                    message: error.message
                }
            );
        }
    }
}

module.exports = ProductController;