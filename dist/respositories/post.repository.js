"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = createPost;
exports.getPost = getPost;
exports.getPostsByAuthorId = getPostsByAuthorId;
exports.getPostsByContent = getPostsByContent;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
const db_1 = __importDefault(require("../lib/db"));
async function createPost(authorType, authorId, content) {
    try {
        const post = await db_1.default.post.create({
            data: {
                authorType,
                authorId,
                content
            }
        });
        return post;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getPost(postId) {
    try {
        const post = await db_1.default.post.findUnique({
            where: {
                id: postId
            }
        });
        return post;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getPostsByAuthorId(authorId) {
    try {
        const posts = await db_1.default.post.findMany({
            where: {
                authorId
            }
        });
        return posts;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getPostsByContent(content) {
    try {
        const posts = await db_1.default.post.findMany({
            where: {
                content: {
                    contains: content
                }
            }
        });
        return posts;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function updatePost(post) {
    try {
        const _post = await db_1.default.post.update({
            where: {
                id: post.id
            },
            data: {
                content: post.content
            }
        });
        return _post;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deletePost(postId) {
    try {
        const post = await db_1.default.post.delete({
            where: {
                id: postId
            }
        });
        return post;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
