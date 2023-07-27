const CommentService = require('../../services/comment.service');

class CommentController {
    static async getAllComments(req, res) {
        try {
            const videoId = req.params.videoId;
            const comments = await CommentService.getAllComments(videoId);
            if (comments.idError) {
                res.status(404).json(
                    {
                        status: 'error',
                        message: comments.idError
                    }
                )
            } else {
                res.status(200).json({
                    status: 'success',
                    data: comments
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

    static async getCommentById (req, res) {
        try {
            const videoId = req.params.videoId;
            const commentId = req.params.commentId;
            const comment = await CommentService.getCommentById(videoId, commentId);
            if (comment.idError) {
                res.status(404).json(
                    {
                        status: 'error',
                        message: comment.idError
                    }
                )
            } else {
                res.status(200).json({
                    status: 'success',
                    data: comment
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

    static async addComment(req, res) {
        try {
            const videoId = req.params.videoId;
            
            if (Array.isArray(req.body)) {
                throw Error("1 comment only");
            }

            const keys = Object.keys(req.body);
            const allowedKeys = ['postedBy', 'text'];

            if (keys.length !== allowedKeys.length || !keys.every(key => allowedKeys.includes(key))) {
                throw Error("Invalid comment format");
            }

            const { postedBy, text } = req.body;
            const newComment = await CommentService.addComment(videoId, postedBy, text);
            if (newComment.idError) {
                res.status(404).json(
                    {
                        status: 'error',
                        message: newComment.idError
                    }
                )
            } else {
                res.status(200).json({
                    status: 'success',
                    data: newComment
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

    //TODO: make remove comment method (from comment.service)
}

module.exports = CommentController;