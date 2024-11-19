import { Message } from '@prisma/client';
import * as messageRepository from '../repositories/message.repository';

export async function createMessage(message: messageRepository.MessageParams): Promise<Message>{
    try{
        const _message = await messageRepository.createMessage(message);
        return _message;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getMessages(): Promise<Message[]>{
    try{
        const messages = await messageRepository.getMessages();
        return messages;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getMessage(messageId: string): Promise<Message | null>{
    try{
        const message = await messageRepository.getMessage(messageId);
        return message;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getMessagesByConversation(conversationId: string): Promise<Message[]>{
    try{
        const messages = await messageRepository.getMessagesByConversation(conversationId);
        return messages;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getMessagesByAuthor(authorId: string): Promise<Message[]>{
    try{
        const messages = await messageRepository.getMessagesByAuthor(authorId);
        return messages;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function updateMessage(message: Message): Promise<Message>{
    try{
        const _message = await messageRepository.updateMessage(message);
        return _message;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteMessage(messageId: string): Promise<Message>{
    try{
        const _message = await messageRepository.deleteMessage(messageId);
        return _message;
    }catch(err){
        throw new Error((err as Error).message)
    }
}