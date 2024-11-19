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
exports.createLike = createLike;
exports.getAllLikes = getAllLikes;
exports.getLikesByPost = getLikesByPost;
exports.getLikesByUser = getLikesByUser;
exports.deleteLike = deleteLike;
const LikeRepository = __importStar(require("../respositories/like.repository"));
async function createLike(like) {
    try {
        const _like = await LikeRepository.createLike(like);
        return _like;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getAllLikes() {
    try {
        const likes = await LikeRepository.getAllLikes();
        return likes;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getLikesByPost(postId) {
    try {
        const likes = await LikeRepository.getLikesByPost(postId);
        return likes;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getLikesByUser(userId) {
    try {
        const likes = await LikeRepository.getLikesByUser(userId);
        return likes;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteLike(likeId) {
    try {
        const _like = await LikeRepository.deleteLike(likeId);
        return _like;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
