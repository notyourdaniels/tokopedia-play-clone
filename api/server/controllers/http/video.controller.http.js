const VideoService = require('../../services/video.service');

//TODO: Fixing JSON response content, fixing error handling message
class VideoController {
    static async getAllVideos(req, res, includeProducts, includeComments) {
        try {
            const videos = await VideoService.getAllVideos(includeProducts, includeComments);
            res.status(200).json({
                status: 'success',
                data: videos
            });
        } catch (error) {
            res.status(500).json(
                {
                    status: 'error',
                    message: error.message
                }
            );
        }
    }

    static async getAllVideosThumbnail(req, res) {
        try {
            const thumbnailList = await VideoService.getAllVideosThumbnail()
            res.status(200).json({
                status: 'success',
                data: thumbnailList
            });
        } catch (error) {
            res.status(500).json(
                {
                    status: 'error',
                    message: error.message
                }
            );
        }
    }

    static async getVideoById(req, res, includeProducts, includeComments) {
        try {
            const videoId = req.params.videoId;
            const video = await VideoService.getVideoById(videoId, includeProducts, includeComments);
            if (video.idError) {
                res.status(404).json(
                    {
                        status: 'error',
                        message: video.idError
                    }
                )
            } else {
                res.status(200).json({
                    status: 'success',
                    data: video
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

    static async getVideoThumbnailById(req, res) {
        try {
            const videoId = req.params.videoId;
            const thumbnail = await VideoService.getVideoThumbnailById(videoId);
            if (thumbnail.idError) {
                res.status(404).json(
                    {
                        status: 'error',
                        message: thumbnail.idError
                    }
                )
            } else {
                res.status(200).json({
                    status: 'success',
                    data: thumbnail
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

module.exports = VideoController;