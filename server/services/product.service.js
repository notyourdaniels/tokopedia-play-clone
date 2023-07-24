const Video = require('../models/video.model');

class ProductService {
    static async getAllProductLists(videoId) {
        try {
            const video = await Video.findById(videoId).populate('products');
            return !video.products ? [] : video.products;
        } catch (error) {
            return error;
        }
    }
}

module.exports = ProductService;