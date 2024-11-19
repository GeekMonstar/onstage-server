import { Conversation } from '@prisma/client';
import * as conversationRepository from '../repositories/conversation.repository';

export async function createConversation(conversation: conversationRepository.ConversationParams): Promise<Conversation>{
    try{
        const _conversation = await conversationRepository.createConversation(conversation);
        return _conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversations(): Promise<Conversation[]>{
    try{
        const conversations = await conversationRepository.getConversations();
        return conversations;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversation(conversationId: string): Promise<Conversation | null>{
    try{
        const conversation = await conversationRepository.getConversation(conversationId);
        return conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversationsByArtist(artistId: string): Promise<Conversation[]>{
    try{
        const conversations = await conversationRepository.getConversationsByArtist(artistId);
        return conversations;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getConversationsByHost(hostId: string): Promise<Conversation[]>{
    try{
        const conversations = await conversationRepository.getConversationsByHost(hostId);
        return conversations;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function updateConversation(conversation: Conversation): Promise<Conversation>{
    try{
        const _conversation = await conversationRepository.updateConversation(conversation);
        return _conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteConversation(conversationId: string): Promise<Conversation>{
    try{
        const _conversation = await conversationRepository.deleteConversation(conversationId);
        return _conversation;
    }catch(err){
        throw new Error((err as Error).message)
    }
}