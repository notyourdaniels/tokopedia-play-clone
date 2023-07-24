const Video = require('../models/video.model');
const Product = require('../models/product.model');

const db = require('../utils/database.util');

class CommentService {
    static async getAllComments(videoId, sort_by = 'createdAt', order = 'desc') {
        try {
            const video = await Video.findById(videoId);
            let comments = video.comments;
            if (sort_by === 'createdAt') {
                comments = comments.sort((a, b) => {
                    if (order === 'asc') {
                        return a.timestamp - b.timestamp;
                    } else {
                        return b.timestamp - a.timestamp;
                    }
                });
            } 
            return comments
        } catch (error) {
            return error;
        }
    }

    static async getCommentById(videoId, commentId) {
        try {
            const video = await Video.findById(videoId);
            const comment = video.comments.find(
                comment => comment._id.toString() === commentId);
            return comment;
        } catch (error) {
            return error;
        }
    }

    static async addComment(videoId, postedBy, text) {
        try {
            const newComment = await Video.findOneAndUpdate(
                { _id: videoId },
                { $push: { comments: { postedBy, text } } },
                { new: true, useFindAndModify: false, select: 'comments' }
            ).then(video => video.comments[video.comments.length - 1]);
            console.log(newComment)
            return newComment;
        } catch (error) {
            return error;
        }
    }

    //NOT IMPLEMENTED IN CONTROLLER YET (ALREADY TESTED LOCALLY) 
    static async removeComment(videoId, commentId) {
        try {
            const video = await Video.findById(videoId);
            const comment = video.comments.find(comment => comment._id.toString() === commentId); // For finding comment fist before deleting it
            const deletedComment = await Video.findOneAndUpdate(
                { _id: videoId },
                { $pull: { comments: { _id: commentId } } },
                { new: true, useFindAndModify: false, select: 'comments' }
            ).then(() => comment) // Return deleted comment
            return deletedComment;
        } catch (error) {
            return error;
        }
    }

    //TODO: intergate with web socket
}

module.exports = CommentService;