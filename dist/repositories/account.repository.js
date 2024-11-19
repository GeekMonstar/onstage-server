"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = createAccount;
exports.getAccount = getAccount;
exports.getAccountsByUserId = getAccountsByUserId;
exports.getAccountsByProviderAccountId = getAccountsByProviderAccountId;
exports.updateAccount = updateAccount;
exports.deleteAccount = deleteAccount;
exports.deleteAccountsByUserId = deleteAccountsByUserId;
exports.deleteAccountsByProviderAccountId = deleteAccountsByProviderAccountId;
const db_1 = __importDefault(require("../lib/db"));
async function createAccount(account) {
    try {
        const { userId, type, provider, providerAccountId, access_token: accessToken, refresh_token: refeshToken } = account;
        const newAccount = db_1.default.account.create({
            data: {
                userId,
                type,
                provider,
                providerAccountId,
                access_token: accessToken,
                refresh_token: refeshToken
            }
        });
        return newAccount;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getAccount(accountId) {
    try {
        const account = db_1.default.account.findFirst({
            where: {
                id: accountId
            }
        });
        return account;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getAccountsByUserId(userId) {
    try {
        const accounts = db_1.default.account.findMany({
            where: {
                userId
            }
        });
        return accounts;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getAccountsByProviderAccountId(providerAccountId) {
    try {
        const account = db_1.default.account.findFirst({
            where: {
                providerAccountId
            }
        });
        return account;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function updateAccount(account) {
    try {
        const { id, type, provider, providerAccountId, access_token: accessToken, refresh_token: refeshToken } = account;
        const updatedAccount = db_1.default.account.update({
            where: {
                id
            },
            data: account
        });
        return updatedAccount;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteAccount(accountId) {
    try {
        const deletedAccount = db_1.default.account.delete({
            where: {
                id: accountId
            }
        });
        return deletedAccount;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteAccountsByUserId(userId) {
    try {
        const deletedAccounts = db_1.default.account.deleteMany({
            where: {
                userId
            }
        });
        return deletedAccounts;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteAccountsByProviderAccountId(providerAccountId) {
    try {
        const deletedAccounts = db_1.default.account.deleteMany({
            where: {
                providerAccountId
            }
        });
        return deletedAccounts;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
