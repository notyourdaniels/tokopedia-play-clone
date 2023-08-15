const Video = require('../models/video.model');

class ProductService {
    static async getAllProductLists(videoId) {
        try {
            const video = await Video.findById(videoId).populate('products');

            if (!video) {
                return {idError: "Video not found"};
            }

            return !video.products ? [] : video.products;
        } catch (error) {
            if (error.name === 'CastError') {
                throw new Error("Invalid video ID format")
            } else {
                throw error;
            }
        }
    }
}

module.exports = ProductService;