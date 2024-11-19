import { Conversation } from "@prisma/client";
import db from "../lib/db";

export async function createConversation(params: ConversationParams): Promise<Conversation>{
    try{
        const _conversation = await db.conversation.create({
            data: params
        });
        return _conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversations(): Promise<Conversation[]>{
    try{
        const conversations = await db.conversation.findMany();
        return conversations;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversation(conversationId: string): Promise<Conversation | null>{
    try{
        const conversation = await db.conversation.findUnique({
            where: {
                id: conversationId
            }
        });
        return conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversationsByArtist(artistId: string): Promise<Conversation[]>{
    try{
        const conversations = await db.conversation.findMany({
            where: {
                artistId
            }
        });
        return conversations;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversationsByHost(hostId: string): Promise<Conversation[]>{
    try{
        const conversations = await db.conversation.findMany({
            where: {
                hostId
            }
        });
        return conversations;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function updateConversation(conversation: Conversation): Promise<Conversation>{
    try{
        const _conversation = await db.conversation.update({
            where: {
                id: conversation.id
            },
            data: conversation
        });
        return _conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteConversation(conversationId: string): Promise<Conversation>{
    try{
        const _conversation = await db.conversation.delete({
            where: {
                id: conversationId
            }
        });
        return _conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export interface ConversationParams {
    artistId: string;
    hostId: string;
}