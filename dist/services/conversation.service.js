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
exports.createConversation = createConversation;
exports.getConversations = getConversations;
exports.getConversation = getConversation;
exports.getConversationsByArtist = getConversationsByArtist;
exports.getConversationsByHost = getConversationsByHost;
exports.updateConversation = updateConversation;
exports.deleteConversation = deleteConversation;
const conversationRepository = __importStar(require("../repositories/conversation.repository"));
async function createConversation(conversation) {
    try {
        const _conversation = await conversationRepository.createConversation(conversation);
        return _conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversations() {
    try {
        const conversations = await conversationRepository.getConversations();
        return conversations;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversation(conversationId) {
    try {
        const conversation = await conversationRepository.getConversation(conversationId);
        return conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversationsByArtist(artistId) {
    try {
        const conversations = await conversationRepository.getConversationsByArtist(artistId);
        return conversations;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getConversationsByHost(hostId) {
    try {
        const conversations = await conversationRepository.getConversationsByHost(hostId);
        return conversations;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateConversation(conversation) {
    try {
        const _conversation = await conversationRepository.updateConversation(conversation);
        return _conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteConversation(conversationId) {
    try {
        const _conversation = await conversationRepository.deleteConversation(conversationId);
        return _conversation;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
