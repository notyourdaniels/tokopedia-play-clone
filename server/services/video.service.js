const Video = require('../models/video.model');
const Product = require('../models/product.model');

class VideoService {
    static async getAllVideos(includeProducts = false, includeComments = false) {
        try {
            let videosQuery = Video.find();
            if (includeProducts) {
                videosQuery = videosQuery.populate('products');
            }

            if (!includeProducts) {
                videosQuery = videosQuery.select('-products');
            }

            if (!includeComments) {
                videosQuery = videosQuery.select('-comments');
            }
            
            const videos = await videosQuery.exec();
            return videos;
        } catch (error) {
            throw error;
        }
    }

    static async getAllVideosThumbnail() {
        try {
            const thumbnailList = await Video.find({}, '_id imgUrl title uploader');
            return thumbnailList;
        } catch (error) {
            throw error;
        }
    }

    static async getVideoById(videoId, includeProducts = false, includeComments = false) {
        try {
            let videoQuery = Video.findById(videoId);

            

            if (includeProducts) {
                videoQuery = videoQuery.populate('products');
            }

            if (!includeProducts) {
                videoQuery = videoQuery.select('-products');
            }

            if (!includeComments) {
                videoQuery = videoQuery.select('-comments');
            }
            
            const video = await videoQuery.exec();

            if (!video) {
                return {idError: "Video not found"};
            }
            return video;
        } catch (error) {
            if (error.name === 'CastError') {
                throw new Error("Invalid video ID format")
            } else {
                throw error;
            }
        }
    }

    static async getVideoThumbnailById(id) {
        try {
            const thumbnail = await Video.findById(id, '_id imgUrl title uploader');
            if (!thumbnail) {
                return {idError: "Video not found"};
            }
            return thumbnail;
        } catch (error) {
            if (error.name === 'CastError') {
                throw new Error("Invalid video ID format")
            } else {
                throw error;
            }
        }
    }


}

module.exports = VideoService;