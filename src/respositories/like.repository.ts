import { Like } from "@prisma/client";
import db from "../lib/db";

export async function createLike(params: LikeParams): Promise<Like>{
    try{
        const like = await db.like.create({
            data: {
                userId: params.userId,
                postId: params.postId
            }
        });
        return like;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getAllLikes(): Promise<Like[]>{
    try{
        const likes = await db.like.findMany();
        return likes;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getLikesByPost(postId: string): Promise<Like[]>{
    try{
        const likes = await db.like.findMany({
            where: {
                postId
            }
        });
        return likes;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getLikesByUser(userId: string): Promise<Like[]>{
    try{
        const likes = await db.like.findMany({
            where: {
                userId
            }
        });
        return likes;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getLikesByUserId(userId: string): Promise<Like[]>{
    try{
        const like = await db.like.findMany({
            where: {
                userId
            }
        });
        return like;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function deleteLike(likeId: string): Promise<Like>{
    try{
        const like = await db.like.delete({
            where: {
                id: likeId
            }
        });
        return like;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export interface LikeParams {
    userId: string;
    postId: string;
}