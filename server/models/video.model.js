const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        trim: true,
        required: 'Image Thumbnail URL is required',
    },
    videoUrl: {
        type: String,
        trim: true,
        required: 'Video URL is required',
    },
    title: {
        type: String,
        trim: true,
        required: 'Title is required',
    },
    uploader: {
        type: String,
        trim: true,
        required: 'Uploader is required',
    },
    productsCount: {
        type: Number,
        default: 0,
    },
    commentsCount: {
        type: Number,
        default: 0,
    },
    products: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
    },
    comments: [{
        postedBy: { type: String, trim: true, required: 'Username is required' },
        timestamp: { type: Date, default: Date.now },
        text: String,
    }],
});

module.exports = mongoose.model('videos', VideoSchema);