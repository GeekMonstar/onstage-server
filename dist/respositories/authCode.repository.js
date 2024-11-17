"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthCode = createAuthCode;
exports.getAuthCode = getAuthCode;
exports.changeAuthCodeStatus = changeAuthCodeStatus;
const db_1 = __importDefault(require("../lib/db"));
const tokens_1 = require("../lib/tokens");
async function createAuthCode(userId, accountId) {
    try {
        const createdAuthCode = await db_1.default.authCode.create({
            data: {
                code: await (0, tokens_1.generateAuthCode)(userId, accountId),
                userId,
                accountId,
                expires: new Date(Date.now() + 60000),
                isExpired: false
            }
        });
        return createdAuthCode;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getAuthCode(code) {
    try {
        const authCode = await db_1.default.authCode.findMany({
            where: {
                code,
                isExpired: false
            }
        });
        return authCode[authCode.length - 1];
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function changeAuthCodeStatus(id) {
    try {
        const updatedAuthCode = await db_1.default.authCode.update({
            where: {
                id
            },
            data: {
                isExpired: true
            }
        });
        return updatedAuthCode;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
