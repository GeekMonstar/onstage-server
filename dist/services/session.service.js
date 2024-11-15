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
exports.createSession = createSession;
exports.getSession = getSession;
exports.getSessionsByUserId = getSessionsByUserId;
exports.deleteSession = deleteSession;
exports.deleteSessionsByUserId = deleteSessionsByUserId;
const sessionRepository = __importStar(require("../respositories/session.repositoriy"));
async function createSession(userId, sessionToken, expires) {
    try {
        const session = await sessionRepository.createSession(userId, sessionToken, expires);
        if (!session) {
            throw new Error('Session not created');
        }
        return session;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getSession(sessionToken) {
    try {
        const session = await sessionRepository.getSession(sessionToken);
        if (!session) {
            throw new Error('Session not found');
        }
        return session;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getSessionsByUserId(userId) {
    try {
        const sessions = await sessionRepository.getSessionsByUserId(userId);
        if (!sessions) {
            throw new Error('Sessions not found');
        }
        return sessions;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteSession(sessionToken) {
    try {
        const session = await sessionRepository.deleteSession(sessionToken);
        if (!session) {
            throw new Error('Session not deleted');
        }
        return session;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteSessionsByUserId(userId) {
    try {
        const sessions = await sessionRepository.deleteSessionsByUserId(userId);
        if (!sessions) {
            throw new Error('Sessions not deleted');
        }
        return sessions;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
