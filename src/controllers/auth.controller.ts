import { Request, Response } from "express";
import * as authService from "../services/auth.service";

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