"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = createComment;
exports.getComment = getComment;
exports.getCommentsByPostId = getCommentsByPostId;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;
exports.deleteCommentsByPostId = deleteCommentsByPostId;
exports.deleteAllComments = deleteAllComments;
const db_1 = __importDefault(require("../lib/db"));
async function createComment(comment) {
    try {
        const _comment = await db_1.default.comment.create({
            data: comment
        });
        return _comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getComment(commentId) {
    try {
        const comment = await db_1.default.comment.findUnique({
            where: {
                id: commentId
            }
        });
        return comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getCommentsByPostId(postId) {
    try {
        const comments = await db_1.default.comment.findMany({
            where: {
                postId
            }
        });
        return comments;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateComment(comment) {
    try {
        const _comment = await db_1.default.comment.update({
            where: {
                id: comment.id
            },
            data: comment
        });
        return _comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteComment(commentId) {
    try {
        const _comment = await db_1.default.comment.delete({
            where: {
                id: commentId
            }
        });
        return _comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteCommentsByPostId(postId) {
    try {
        const comments = await db_1.default.comment.deleteMany({
            where: {
                postId
            }
        });
        return comments;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteAllComments() {
    try {
        const comments = await db_1.default.comment.deleteMany();
        return comments;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
