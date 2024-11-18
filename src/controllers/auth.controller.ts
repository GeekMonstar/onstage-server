import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import * as authCodeService from "../services/authCode.service";
import * as userService from "../services/user.service";
import * as accountService from "../services/account.service";
import { generateAccessToken, generateRefreshToken } from "../lib/tokens";

export async function signupWithEmail(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const {redirect_to} = req.query;
    try {
        const auth = await authService.sigupWithEmail(name, email, password);
        const { user, account } = auth;
        if (redirect_to) res.redirect(redirect_to as string);
        res
            .status(201)
            .cookie("refreshToken", account.refresh_token, {httpOnly: true, secure: true, maxAge: 3600000, sameSite: "none"})
            .json({ authCode: auth.code });
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
}

export async function loginWithEmail(req: Request, res: Response) {
    const { email, password } = req.body;
    const {redirect_to} = req.query;
    try {
        const auth = await authService.loginWithEmail(email, password);
        const { user, account } = auth;
        console.log('user: ', user);
        console.log('account: ', account);
        if (redirect_to) res.redirect(redirect_to as string);
        res
            .status(200)
            .cookie("refreshToken", account.refresh_token, {httpOnly: true, secure: true, maxAge: 3600000, sameSite: "none"})
            .json({authCode: auth.code});
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: (err as Error).message });
    }
}

export async function callbackWithEmail(req: Request, res: Response) {
    const { code } = req.params;
    try {
        const auth = await authCodeService.getAuthCode(code);
        if (!auth) throw new Error("Invalid code");
        const user = await userService.getUser(auth.userId);
        if (!user) throw new Error("User not found");
        const accessToken = await generateAccessToken(user.id);
        const refeshToken = await generateRefreshToken(user.id);
        const account = await accountService.getAccount(auth.accountId);
        if (!account) throw new Error("Account not found");
        account.access_token = accessToken;
        account.refresh_token = refeshToken;
        const updatedAccount = await accountService.updateAccount(account);
        res
            .status(200)
            .cookie("refreshToken", refeshToken, {httpOnly: true, secure: true, maxAge: 3600000, sameSite: "none"})
            .json({ 
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.image,
                    role: user.role
                },
                account: {
                    id: updatedAccount.id,
                    access_token: updatedAccount.access_token,
                }
            });
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
}