const Video = require('../models/video.model');
const Product = require('../models/product.model');

const db = require('../utils/database.util');

class CommentService {
    static async getAllComments(videoId, sort_by = 'createdAt', order = 'desc') {
        try {
            const video = await Video.findById(videoId);
            
            if (!video) {
                return {idError: "Video not found"};
            }

            let comments = video.comments;
            if (sort_by === 'createdAt') {
                comments = comments.sort((a, b) => {
                    const timestampA = new Date(a.timestamp);
                    const timestampB = new Date(b.timestamp);
                    if (order === 'asc') {
                        return timestampA - timestampB;
                    } else {
                        return timestampB - timestampA;
                    }
                });
            } 
            return comments
        } catch (error) {
            if (error.name === 'CastError') {
                throw new Error("Invalid video ID format")
            } else {
                throw error;
            }
        }
    }

    static async getCommentById(videoId, commentId) {
        try {
            const video = await Video.findById(videoId);
            
            if (!video) {
                return {idError: "Video not found"};
            }

            const comment = video.comments.find(
                comment => comment._id.toString() === commentId);

            if (!comment) {
                return ({idError: "Comment not found"});
            }
            return comment;
        } catch (error) {
            if (error.name === 'CastError') {
                throw new Error("Invalid video ID format")
            } else {
                throw error;
            }
        }
    }

    static async addComment(videoId, postedBy, text) {
        try {
            const video = await Video.findById(videoId);
            if (!video) {
                return {idError: "Video not found"};
            }
            
            const newComment = await Video.findOneAndUpdate(
                { _id: videoId },
                { $push: { comments: { postedBy, text } } },
                { new: true, useFindAndModify: false, select: 'comments' }
            ).then(video => video.comments[video.comments.length - 1]);
            return newComment;
        } catch (error) {
            if (error.name === 'CastError') {
                throw new Error("Invalid video ID format")
            } else {
                throw error;
            }
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