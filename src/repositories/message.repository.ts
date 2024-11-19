import { ActorType, Message } from "@prisma/client";
import db from "../lib/db";

export async function createMessage(params: MessageParams): Promise<Message> {
    try {
        const message = await db.message.create({
            data: params
        });
        return message;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getMessages(): Promise<Message[]> {
    try {
        const messages = await db.message.findMany();
        return messages;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getMessage(messageId: string): Promise<Message | null> {
    try {
        const message = await db.message.findUnique({
            where: {
                id: messageId
            }
        });
        return message;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getMessagesByConversation(conversationId: string): Promise<Message[]> {
    try {
        const messages = await db.message.findMany({
            where: {
                conversationId
            }
        });
        return messages;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getMessagesByAuthor(authorId: string): Promise<Message[]> {
    try {
        const messages = await db.message.findMany({
            where: {
                authorId
            }
        });
        return messages;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function updateMessage(message: Message): Promise<Message> {
    try {
        const _message = await db.message.update({
            where: {
                id: message.id
            },
            data: message
        });
        return _message;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function deleteMessage(messageId: string): Promise<Message> {
    try {
        const _message = await db.message.delete({
            where: {
                id: messageId
            }
        });
        return _message;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export interface MessageParams {
    conversationId: string,
    authorType: ActorType,
    authorId: string,
    content: string
}