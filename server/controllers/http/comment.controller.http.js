const CommentService = require('../../services/comment.service');

//TODO: Fixing JSON response content, fixing error handling message
class CommentController {
    static async getAllComments(req, res) {
        try {
            const videoId = req.params.videoId;
            const comments = await CommentService.getAllComments(videoId);
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async getCommentById (req, res) {
        try {
            const videoId = req.params.videoId;
            const commentId = req.params.commentId;
            const comment = await CommentService.getCommentById(videoId, commentId);
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async addComment(req, res) {
        try {
            const videoId = req.params.videoId;
            const { postedBy, text } = req.body;
            const newComment = await CommentService.addComment(videoId, postedBy, text);
            res.status(200).json(newComment);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //TODO: make remove comment method (from comment.service)
}

module.exports = CommentController;