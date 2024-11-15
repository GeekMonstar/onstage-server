import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function signupWithEmail(req: Request, res: Response) {
    const { name, email, password } = req.body;
    try {
        const auth = await authService.sigupWithEmail(name, email, password);
        const { user, account } = auth;
        res
            .status(201)
            .cookie("refreshToken", account.refresh_token, {httpOnly: true, secure: true, maxAge: 3600000, sameSite: "none"})
            .json({ 
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }, 
                account: {
                    id: account.id,
                    userId: account.userId,
                    type: account.type,
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    access_token: account.access_token
                }});
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
}

export async function loginWithEmail(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
        const auth = await authService.loginWithEmail(email, password);
        const { user, account } = auth;
        console.log('user: ', user);
        res
            .status(200)
            .cookie("refreshToken", account.refresh_token, {httpOnly: true, secure: true, maxAge: 3600000, sameSite: "none"})
            .json({ 
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }, 
                account: {
                    id: account.id,
                    userId: account.userId,
                    type: account.type,
                    provider: account.provider,
                    providerAccountId: account.providerAccountId,
                    access_token: account.access_token
                }});
    } catch (err) {
        res.status(400).json({ message: (err as Error).message });
    }
}