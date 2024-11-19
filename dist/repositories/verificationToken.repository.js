"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVerificationToken = createVerificationToken;
exports.getVerificationToken = getVerificationToken;
exports.getAllVerificationTokens = getAllVerificationTokens;
const db_1 = __importDefault(require("../lib/db"));
async function createVerificationToken(identifier, token, expires, userId) {
    try {
        const verificationToken = await db_1.default.verificationToken.create({
            data: {
                identifier,
                token,
                expires,
                userId
            }
        });
        return verificationToken;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getVerificationToken(identifier) {
    try {
        const verificationToken = await db_1.default.verificationToken.findFirst({
            where: {
                identifier
            }
        });
        return verificationToken;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getAllVerificationTokens() {
    try {
        const verificationToken = await db_1.default.verificationToken.findMany();
        return verificationToken;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
