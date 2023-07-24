const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/http/comment.controller.http');

router.get('/videos/:videoId/comments', (req, res) => {
    CommentController.getAllComments(req, res)
})

router.get('/videos/:videoId/comments/:commentId', (req, res) => {
    CommentController.getCommentById(req, res)
})

router.post('/videos/:videoId/comments', (req, res) => {
    CommentController.addComment(req, res)
});

module.exports = router;