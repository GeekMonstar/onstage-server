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
exports.sigupWithEmail = sigupWithEmail;
exports.loginWithEmail = loginWithEmail;
const userServices = __importStar(require("./user.service"));
const accountServices = __importStar(require("./account.service"));
const tokens_1 = require("../lib/tokens");
const bcrypt_1 = require("bcrypt");
async function sigupWithEmail(name, email, password, role) {
    try {
        const user = await userServices.createUser(name, email, password, role);
        const accessToken = await (0, tokens_1.generateAccessToken)(user.id);
        const refeshToken = await (0, tokens_1.generateRefreshToken)(user.id);
        console.log('accessToken', accessToken);
        console.log('refeshToken', refeshToken);
        const account = await accountServices.createAccount({
            userId: user.id,
            type: 'credentials',
            provider: 'email',
            providerAccountId: email,
            access_token: accessToken,
            refresh_token: refeshToken
        });
        return { user, account };
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function loginWithEmail(email, password) {
    try {
        const user = await userServices.getUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password) {
            const comparePassword = await (0, bcrypt_1.compare)(password, user.password);
            if (!comparePassword) {
                throw new Error('Password not match');
            }
            else {
                const account = await accountServices.getAccountsByProviderAccountId(email);
                const accessToken = await (0, tokens_1.generateAccessToken)(user.id);
                const refeshToken = await (0, tokens_1.generateRefreshToken)(user.id);
                if (!account) {
                    const account = await accountServices.createAccount({
                        userId: user.id,
                        type: 'credentials',
                        provider: 'email',
                        providerAccountId: email,
                        access_token: accessToken,
                        refresh_token: refeshToken
                    });
                    return { user, account };
                }
                const updatedAccount = await accountServices.updateAccount({
                    ...account,
                    access_token: accessToken,
                    refresh_token: refeshToken,
                });
                return { user, account: updatedAccount };
            }
        }
        throw new Error('User not found');
    }
    catch (err) {
        throw new Error(err.message);
    }
}
