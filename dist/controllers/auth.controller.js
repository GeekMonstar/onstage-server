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
exports.signupWithEmail = signupWithEmail;
exports.loginWithEmail = loginWithEmail;
const authService = __importStar(require("../services/auth.service"));
async function signupWithEmail(req, res) {
    const { name, email, password } = req.body;
    const { redirect_to } = req.query;
    try {
        const auth = await authService.sigupWithEmail(name, email, password);
        const { user, account } = auth;
        if (redirect_to)
            res.redirect(redirect_to);
        res
            .status(201)
            .cookie("refreshToken", account.refresh_token, { httpOnly: true, secure: true, maxAge: 3600000, sameSite: "none" })
            .json({ authCode: auth.code });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}
async function loginWithEmail(req, res) {
    const { email, password } = req.body;
    const { redirect_to } = req.query;
    try {
        const auth = await authService.loginWithEmail(email, password);
        const { user, account } = auth;
        console.log('user: ', user);
        console.log('account: ', account);
        if (redirect_to)
            res.redirect(redirect_to);
        res
            .status(200)
            .cookie("refreshToken", account.refresh_token, { httpOnly: true, secure: true, maxAge: 3600000, sameSite: "none" })
            .json({ authCode: auth.code });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}
