const VideoService = require('../../services/video.service');

//TODO: Fixing JSON response content, fixing error handling message
class VideoController {
    static async getAllVideos(req, res, includeProducts, includeComments) {
        try {
            const videos = await VideoService.getAllVideos(includeProducts, includeComments);
            res.status(200).json(videos);
        } catch (error) {
            res.status(500).json({error});
        }
    }

    static async getAllVideosThumbnail(req, res) {
        try {
            const thumbnailList = await VideoService.getAllVideosThumbnail()
            res.status(200).json(thumbnailList)
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getVideoById(req, res, includeProducts, includeComments) {
        try {
            const videoId = req.params.videoId;
            const video = await VideoService.getVideoById(videoId, includeProducts, includeComments);
            res.status(200).json(video);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getVideoThumbnailById(req, res) {
        try {
            const videoId = req.params.videoId;
            const thumbnail = await VideoService.getVideoThumbnailById(videoId);
            res.status(200).json(thumbnail);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = VideoController;