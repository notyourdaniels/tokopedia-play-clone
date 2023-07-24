const express = require('express');
const router = express.Router();

const VideoController = require('../controllers/http/video.controller.http');

router.get('/videos', (req, res) => {
    const includeProducts = req.query.includeProducts === 'true';
    const includeComments = req.query.includeComments === 'true';
    VideoController.getAllVideos(req, res, includeProducts, includeComments);
});

router.get('/videos/thumbnails', (req, res) => {
    VideoController.getAllVideosThumbnail(req, res);
});

router.get('/videos/:videoId', (req, res) => {
    const includeProducts = req.query.includeProducts === 'true';
    const includeComments = req.query.includeComments === 'true';
    VideoController.getVideoById(req, res, includeProducts, includeComments);
});

router.get('/videos/:videoId/thumbnail', (req, res) => {
    VideoController.getVideoThumbnailById(req, res)
});

module.exports = router;