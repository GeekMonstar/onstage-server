"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComment = createComment;
exports.getComment = getComment;
exports.getCommentsByPostId = getCommentsByPostId;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;
const commentRepository = __importStar(require("../respositories/comment.repository"));
async function createComment(comment) {
    try {
        const _comment = await commentRepository.createComment(comment);
        return _comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getComment(commentId) {
    try {
        const comment = await commentRepository.getComment(commentId);
        return comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getCommentsByPostId(postId) {
    try {
        const comments = await commentRepository.getCommentsByPostId(postId);
        return comments;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateComment(comment) {
    try {
        const _comment = await commentRepository.updateComment(comment);
        return _comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteComment(commentId) {
    try {
        const _comment = await commentRepository.deleteComment(commentId);
        return _comment;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
