import { Comment } from '@prisma/client';
import * as commentRepository from '../respositories/comment.repository';

export async function createComment(comment: commentRepository.CommentParams): Promise<Comment>{
    try{
        const _comment = await commentRepository.createComment(comment);
        return _comment;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getComment(commentId: string): Promise<Comment | null>{
    try{
        const comment = await commentRepository.getComment(commentId);
        return comment;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getCommentsByPostId(postId: string): Promise<Comment[]>{
    try{
        const comments = await commentRepository.getCommentsByPostId(postId);
        return comments;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function updateComment(comment: Comment): Promise<Comment>{
    try{
        const _comment = await commentRepository.updateComment(comment);
        return _comment;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteComment(commentId: string): Promise<Comment>{
    try{
        const _comment = await commentRepository.deleteComment(commentId);
        return _comment;
    }catch(err){
        throw new Error((err as Error).message)
    }
}