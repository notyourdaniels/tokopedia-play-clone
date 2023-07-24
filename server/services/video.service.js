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
            return error;
        }
    }

    static async getAllVideosThumbnail() {
        try {
            const thumbnailList = await Video.find({}, '_id imgUrl title uploader');
            return thumbnailList;
        } catch (error) {
            return error;
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
            return video;
        } catch (error) {
            return error;
        }
    }

    static async getVideoThumbnailById(id) {
        try {
            const thumbnail = await Video.findById(id, '_id imgUrl title uploader');
            return thumbnail;
        } catch (error) {
            return error;
        }
    }


}

module.exports = VideoService;