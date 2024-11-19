import { Like } from '@prisma/client';
import * as LikeRepository from '../respositories/like.repository';
import e from 'express';

export async function createLike(like: LikeRepository.LikeParams): Promise<Like>{
    try{
        const _like = await LikeRepository.createLike(like);
        return _like;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getAllLikes(): Promise<Like[]>{ 
    try{
        const likes = await LikeRepository.getAllLikes();
        return likes;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getLikesByPost(postId: string): Promise<Like[]>{ 
    try{
        const likes = await LikeRepository.getLikesByPost(postId);
        return likes;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getLikesByUser(userId: string): Promise<Like[]>{ 
    try{
        const likes = await LikeRepository.getLikesByUser(userId);
        return likes;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteLike(likeId: string): Promise<Like>{
    try{
        const _like = await LikeRepository.deleteLike(likeId);
        return _like;
    }catch(err){
        throw new Error((err as Error).message)
    }
}