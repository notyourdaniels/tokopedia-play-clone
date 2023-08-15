const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productLink: {
        type: String,
        trim: true,
        required: 'Image Thumbnail URL is required',
    },
    title: {
        type: String,
        trim: true,
        required: 'Title is required',
    },
    price: {
        type: Number,
        trim: true,
        required: 'Price is required',
    },
});

module.exports = mongoose.model('products', ProductSchema);