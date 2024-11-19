import { ActorType, Post } from '@prisma/client';
import * as postRepository from '../repositories/post.repository';

export async function createPost(authorType: ActorType, authorId: string, content: string): Promise<Post>{
    try{
        const post = await postRepository.createPost(authorType, authorId, content);
        if(!post){
            throw new Error('Post not created');
        }
        return post;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getPost(postId: string): Promise<Post | null>{
    try{
        const post = await postRepository.getPost(postId);
        if(!post){
            throw new Error('Post not found');
        }
        return post;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getPostsByAuthorId(authorId: string): Promise<Post[]>{
    try{
        const posts = await postRepository.getPostsByAuthorId(authorId);
        if(!posts){
            throw new Error('Posts not found');
        }
        return posts;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getPostsByContent(content: string): Promise<Post[]>{
    try{
        const posts = await postRepository.getPostsByContent(content);
        if(!posts){
            throw new Error('Posts not found');
        }
        return posts;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function updatePost(post: Post): Promise<Post>{
    try{
        const _post = await postRepository.updatePost(post);
        if(!_post){
            throw new Error('Post not updated');
        }
        return _post;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deletePost(postId: string): Promise<Post>{
    try{
        const post = await postRepository.deletePost(postId);
        if(!post){
            throw new Error('Post not deleted');
        }
        return post;
    }catch(err){
        throw new Error((err as Error).message);
    }
}