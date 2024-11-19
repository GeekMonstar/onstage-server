"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConversation = createConversation;
exports.getConversations = getConversations;
exports.getConversation = getConversation;
exports.getConversationsByArtist = getConversationsByArtist;
exports.getConversationsByHost = getConversationsByHost;
exports.updateConversation = updateConversation;
exports.deleteConversation = deleteConversation;
const db_1 = __importDefault(require("../lib/db"));
async function createConversation(params) {
    try {
        const _conversation = await db_1.default.conversation.create({
            data: params
        });
        return _conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversations() {
    try {
        const conversations = await db_1.default.conversation.findMany();
        return conversations;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversation(conversationId) {
    try {
        const conversation = await db_1.default.conversation.findUnique({
            where: {
                id: conversationId
            }
        });
        return conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversationsByArtist(artistId) {
    try {
        const conversations = await db_1.default.conversation.findMany({
            where: {
                artistId
            }
        });
        return conversations;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversationsByHost(hostId) {
    try {
        const conversations = await db_1.default.conversation.findMany({
            where: {
                hostId
            }
        });
        return conversations;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateConversation(conversation) {
    try {
        const _conversation = await db_1.default.conversation.update({
            where: {
                id: conversation.id
            },
            data: conversation
        });
        return _conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteConversation(conversationId) {
    try {
        const _conversation = await db_1.default.conversation.delete({
            where: {
                id: conversationId
            }
        });
        return _conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
