"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = createMessage;
exports.getMessages = getMessages;
exports.getMessage = getMessage;
exports.getMessagesByConversation = getMessagesByConversation;
exports.getMessagesByAuthor = getMessagesByAuthor;
exports.updateMessage = updateMessage;
exports.deleteMessage = deleteMessage;
const db_1 = __importDefault(require("../lib/db"));
async function createMessage(params) {
    try {
        const message = await db_1.default.message.create({
            data: params
        });
        return message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessages() {
    try {
        const messages = await db_1.default.message.findMany();
        return messages;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessage(messageId) {
    try {
        const message = await db_1.default.message.findUnique({
            where: {
                id: messageId
            }
        });
        return message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessagesByConversation(conversationId) {
    try {
        const messages = await db_1.default.message.findMany({
            where: {
                conversationId
            }
        });
        return messages;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessagesByAuthor(authorId) {
    try {
        const messages = await db_1.default.message.findMany({
            where: {
                authorId
            }
        });
        return messages;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateMessage(message) {
    try {
        const _message = await db_1.default.message.update({
            where: {
                id: message.id
            },
            data: message
        });
        return _message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteMessage(messageId) {
    try {
        const _message = await db_1.default.message.delete({
            where: {
                id: messageId
            }
        });
        return _message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
