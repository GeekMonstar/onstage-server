import { Account, User } from '@prisma/client';
import * as userServices from './user.service';
import * as accountServices from './account.service';
import * as authCodeServices from './authCode.service';
import { generateAccessToken, generateRefreshToken } from '../lib/tokens';
import { compare } from 'bcrypt';

export async function sigupWithEmail(name: string, email: string, password: string, role?: "USER" | "ADMIN"): Promise<{user: User, account: Account, code: string}> {
    try {
        const user = await userServices.createUser(name, email, password, role);
        const accessToken = await generateAccessToken(user.id);
        const refeshToken = await generateRefreshToken(user.id);
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
        const authCode = await authCodeServices.createAuthCode(user.id, account.id);
        return {user, account, code: authCode.code};
    } catch (err) {
        throw new Error((err as Error).message)
    } 
}

export async function  loginWithEmail(email: string, password: string): Promise<{user: User, account: Account, code: string}> {
    try {
        const user = await userServices.getUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        if(user.password){
            const comparePassword = await compare(password, user.password);
            if (!comparePassword) {
                throw new Error('Password not match');
            }else{
                const account = await accountServices.getAccountsByProviderAccountId(email);
                const accessToken = await generateAccessToken(user.id);
                const refeshToken = await generateRefreshToken(user.id);
                if (!account) {
                    const account = await accountServices.createAccount({
                        userId: user.id, 
                        type: 'credentials', 
                        provider: 'email', 
                        providerAccountId: email, 
                        access_token: accessToken, 
                        refresh_token: refeshToken
                    });
                    const authCode = await authCodeServices.createAuthCode(user.id, account.id);
                    return {user, account, code: authCode.code};
                }
                const updatedAccount = await accountServices.updateAccount({
                    ...account,
                    access_token: accessToken,
                    refresh_token: refeshToken,
                });
                const authCode = await authCodeServices.createAuthCode(user.id, updatedAccount.id);
                return {user, account: updatedAccount, code: authCode.code};
            }
        }
        throw new Error('User not found');
    } catch (err) {
        throw new Error((err as Error).message)
    }
}