import { ActorType, Comment, Prisma } from "@prisma/client";
import db from "../lib/db";
import e from "express";

export async function createComment(comment: CommentParams): Promise<Comment> {
    try {
        const _comment = await db.comment.create({
            data: comment
        })
        return _comment;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getComment(commentId: string): Promise<Comment | null> {
    try {
        const comment = await db.comment.findUnique({
            where: {
                id: commentId
            }
        });
        return comment;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getCommentsByPostId(postId: string): Promise<Comment[]> {
    try {
        const comments = await db.comment.findMany({
            where: {
                postId
            }
        });
        return comments;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function updateComment(comment: Comment): Promise<Comment> {
    try {
        const _comment = await db.comment.update({
            where: {
                id: comment.id
            },
            data: comment
        });
        return _comment;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function deleteComment(commentId: string): Promise<Comment> {
    try {
        const _comment = await db.comment.delete({
            where: {
                id: commentId
            }
        });
        return _comment;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function deleteCommentsByPostId(postId: string): Promise<Prisma.BatchPayload> {
    try {
        const comments = await db.comment.deleteMany({
            where: {
                postId
            }
        });
        return comments;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function deleteAllComments(): Promise<Prisma.BatchPayload> {
    try {
        const comments = await db.comment.deleteMany();
        return comments;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export interface CommentParams {
    postId: string,
    authorType: ActorType,
    authorId: string,
    content: string
}