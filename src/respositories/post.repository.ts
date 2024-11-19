import { ActorType, Post } from "@prisma/client";
import db from "../lib/db";
import e from "express";

export async function createPost(authorType: ActorType, authorId: string, content: string): Promise<Post>{
    try{
        const post = await db.post.create({
            data: {
                authorType,
                authorId,
                content
            }
        });
        return post;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getPost(postId: string): Promise<Post | null>{
    try{
        const post = await db.post.findUnique({
            where: {
                id: postId
            }
        });
        return post;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getPostsByAuthorId(authorId: string): Promise<Post[]>{
    try{
        const posts = await db.post.findMany({
            where: {
                authorId
            }
        });
        return posts;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getPostsByContent(content: string): Promise<Post[]>{
    try{
        const posts = await db.post.findMany({
            where: {
                content: {
                    contains: content
                }
            }
        });
        return posts;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function updatePost(post: Post): Promise<Post>{
    try{
        const _post = await db.post.update({
            where: {
                id: post.id
            },
            data: {
                content: post.content
            }
        });
        return _post;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function deletePost(postId: string): Promise<Post | null>{
    try{
        const post = await db.post.delete({
            where: {
                id: postId
            }
        });
        return post;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}