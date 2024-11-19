"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLike = createLike;
exports.getAllLikes = getAllLikes;
exports.getLikesByPost = getLikesByPost;
exports.getLikesByUser = getLikesByUser;
exports.getLikesByUserId = getLikesByUserId;
exports.deleteLike = deleteLike;
const db_1 = __importDefault(require("../lib/db"));
async function createLike(params) {
    try {
        const like = await db_1.default.like.create({
            data: {
                userId: params.userId,
                postId: params.postId
            }
        });
        return like;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getAllLikes() {
    try {
        const likes = await db_1.default.like.findMany();
        return likes;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getLikesByPost(postId) {
    try {
        const likes = await db_1.default.like.findMany({
            where: {
                postId
            }
        });
        return likes;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getLikesByUser(userId) {
    try {
        const likes = await db_1.default.like.findMany({
            where: {
                userId
            }
        });
        return likes;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getLikesByUserId(userId) {
    try {
        const like = await db_1.default.like.findMany({
            where: {
                userId
            }
        });
        return like;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteLike(likeId) {
    try {
        const like = await db_1.default.like.delete({
            where: {
                id: likeId
            }
        });
        return like;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
