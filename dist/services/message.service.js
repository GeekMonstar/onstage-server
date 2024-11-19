"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = createMessage;
exports.getMessages = getMessages;
exports.getMessage = getMessage;
exports.getMessagesByConversation = getMessagesByConversation;
exports.getMessagesByAuthor = getMessagesByAuthor;
exports.updateMessage = updateMessage;
exports.deleteMessage = deleteMessage;
const messageRepository = __importStar(require("../repositories/message.repository"));
async function createMessage(message) {
    try {
        const _message = await messageRepository.createMessage(message);
        return _message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessages() {
    try {
        const messages = await messageRepository.getMessages();
        return messages;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessage(messageId) {
    try {
        const message = await messageRepository.getMessage(messageId);
        return message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessagesByConversation(conversationId) {
    try {
        const messages = await messageRepository.getMessagesByConversation(conversationId);
        return messages;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getMessagesByAuthor(authorId) {
    try {
        const messages = await messageRepository.getMessagesByAuthor(authorId);
        return messages;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateMessage(message) {
    try {
        const _message = await messageRepository.updateMessage(message);
        return _message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteMessage(messageId) {
    try {
        const _message = await messageRepository.deleteMessage(messageId);
        return _message;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
