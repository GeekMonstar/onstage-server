import { Account, Prisma } from "@prisma/client";
import db from "../lib/db"

export async function createAccount(account: AccountParams): Promise<Account>{
    try{
        const {userId, type, provider, providerAccountId, access_token: accessToken, refresh_token: refeshToken} = account;
        const newAccount = db.account.create({
            data: {
                userId,
                type,
                provider,
                providerAccountId,
                access_token: accessToken,
                refresh_token: refeshToken
            }
        })
        return newAccount;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getAccount(accountId: string): Promise<Account | null>{
    try{
        const account = db.account.findFirst({
            where: {
                id: accountId
            }
        })
        return account;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getAccountsByUserId(userId: string): Promise<Account[]>{
    try{
        const accounts = db.account.findMany({
            where: {
                userId
            }
        })
        return accounts;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function getAccountsByProviderAccountId(providerAccountId: string): Promise<Account | null>{
    try{
        const account = db.account.findFirst({
            where: {
                providerAccountId
            }
        })
        return account;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function updateAccount(account: Account): Promise<Account>{
    try{
        const {id, type, provider, providerAccountId, access_token: accessToken, refresh_token: refeshToken} = account;
        const updatedAccount = db.account.update({
            where: {
                id
            },
            data: account
        })
        return updatedAccount;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function deleteAccount(accountId: string): Promise<Account>{
    try{
        const deletedAccount = db.account.delete({
            where: {
                id: accountId
            }
        })
        return deletedAccount;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function deleteAccountsByUserId(userId: string): Promise<Prisma.BatchPayload>{
    try{
        const deletedAccounts = db.account.deleteMany({
            where: {
                userId
            }
        })
        return deletedAccounts;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export async function deleteAccountsByProviderAccountId(providerAccountId: string): Promise<Prisma.BatchPayload>{
    try{
        const deletedAccounts = db.account.deleteMany({
            where: {
                providerAccountId
            }
        })
        return deletedAccounts;
    }catch(err){
        throw new Error((err as Error).message)
    }finally{
        db.$disconnect();
    }
}

export interface AccountParams {
    userId: string,
    type: "credentials" | "oauth",
    provider: "email" | "google" | "facebook",
    providerAccountId: string,
    access_token: string,
    refresh_token: string,
}