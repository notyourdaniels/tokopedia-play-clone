const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/http/comment.controller.http');

router.get('/videos/:videoId/comments', (req, res) => {
    const { sort_by, order } = req.query;
    CommentController.getAllComments(req, res, sort_by, order)
})

router.get('/videos/:videoId/comments/:commentId', (req, res) => {
    CommentController.getCommentById(req, res)
})

router.post('/videos/:videoId/comments', (req, res) => {
    CommentController.addComment(req, res)
});

module.exports = router;