"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSession = createSession;
exports.getSession = getSession;
exports.getSessionsByUserId = getSessionsByUserId;
exports.deleteSession = deleteSession;
exports.deleteSessionsByUserId = deleteSessionsByUserId;
exports.deleteExpiredSessions = deleteExpiredSessions;
const db_1 = __importDefault(require("../lib/db"));
async function createSession(sessionToken, userId, expires) {
    try {
        const newSession = await db_1.default.session.create({
            data: {
                sessionToken,
                userId,
                expires
            }
        });
        return newSession;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getSession(sessionToken) {
    try {
        const session = await db_1.default.session.findFirst({
            where: {
                sessionToken
            }
        });
        return session;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getSessionsByUserId(userId) {
    try {
        const sessions = await db_1.default.session.findMany({
            where: {
                userId
            }
        });
        return sessions;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteSession(sessionToken) {
    try {
        const session = await db_1.default.session.delete({
            where: {
                sessionToken
            }
        });
        return session;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteSessionsByUserId(userId) {
    try {
        const sessions = await db_1.default.session.deleteMany({
            where: {
                userId
            }
        });
        return sessions;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteExpiredSessions() {
    try {
        const sessions = await db_1.default.session.deleteMany({
            where: {
                expires: {
                    lt: new Date()
                }
            }
        });
        return sessions;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
