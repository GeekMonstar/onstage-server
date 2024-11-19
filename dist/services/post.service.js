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
exports.createPost = createPost;
exports.getPost = getPost;
exports.getPostsByAuthorId = getPostsByAuthorId;
exports.getPostsByContent = getPostsByContent;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
const postRepository = __importStar(require("../repositories/post.repository"));
async function createPost(authorType, authorId, content) {
    try {
        const post = await postRepository.createPost(authorType, authorId, content);
        if (!post) {
            throw new Error('Post not created');
        }
        return post;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getPost(postId) {
    try {
        const post = await postRepository.getPost(postId);
        if (!post) {
            throw new Error('Post not found');
        }
        return post;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getPostsByAuthorId(authorId) {
    try {
        const posts = await postRepository.getPostsByAuthorId(authorId);
        if (!posts) {
            throw new Error('Posts not found');
        }
        return posts;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getPostsByContent(content) {
    try {
        const posts = await postRepository.getPostsByContent(content);
        if (!posts) {
            throw new Error('Posts not found');
        }
        return posts;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updatePost(post) {
    try {
        const _post = await postRepository.updatePost(post);
        if (!_post) {
            throw new Error('Post not updated');
        }
        return _post;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deletePost(postId) {
    try {
        const post = await postRepository.deletePost(postId);
        if (!post) {
            throw new Error('Post not deleted');
        }
        return post;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
