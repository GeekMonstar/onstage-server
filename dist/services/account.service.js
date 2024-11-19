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
exports.createAccount = createAccount;
exports.getAccount = getAccount;
exports.getAccountsByUserId = getAccountsByUserId;
exports.getAccountsByProviderAccountId = getAccountsByProviderAccountId;
exports.updateAccount = updateAccount;
exports.deleteAccount = deleteAccount;
exports.deleteAccountsByUserId = deleteAccountsByUserId;
const AccountRepository = __importStar(require("../repositories/account.repository"));
async function createAccount(account) {
    try {
        const _account = await AccountRepository.createAccount(account);
        if (!_account) {
            throw new Error('Account not created');
        }
        return _account;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getAccount(accountId) {
    try {
        const account = await AccountRepository.getAccount(accountId);
        if (!account) {
            throw new Error('Account not found');
        }
        return account;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getAccountsByUserId(userId) {
    try {
        const accounts = await AccountRepository.getAccountsByUserId(userId);
        if (!accounts) {
            throw new Error('Accounts not found');
        }
        return accounts;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getAccountsByProviderAccountId(providerAccountId) {
    try {
        const account = await AccountRepository.getAccountsByProviderAccountId(providerAccountId);
        if (!account) {
            throw new Error('Account not found');
        }
        return account;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateAccount(account) {
    try {
        const _account = await AccountRepository.updateAccount(account);
        if (!_account) {
            throw new Error('Account not updated');
        }
        return _account;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteAccount(accountId) {
    try {
        const account = await AccountRepository.deleteAccount(accountId);
        if (!account) {
            throw new Error('Account not found');
        }
        return account;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteAccountsByUserId(userId) {
    try {
        const accounts = await AccountRepository.deleteAccountsByUserId(userId);
        if (!accounts) {
            throw new Error('Accounts not found');
        }
        return accounts;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
