import { Account, Prisma } from '@prisma/client';
import * as AccountRepository from '../repositories/account.repository';

export async function createAccount(account: AccountRepository.AccountParams): Promise<Account>{
    try{
        const _account = await AccountRepository.createAccount(account);
        if(!_account){
            throw new Error('Account not created');
        }
        return _account;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getAccount(accountId: string): Promise<Account | null>{
    try{
        const account = await AccountRepository.getAccount(accountId);
        if(!account){
            throw new Error('Account not found');
        }
        return account;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getAccountsByUserId(userId: string): Promise<Account[]>{
    try{
        const accounts = await AccountRepository.getAccountsByUserId(userId);
        if(!accounts){
            throw new Error('Accounts not found');
        }
        return accounts;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getAccountsByProviderAccountId(providerAccountId: string): Promise<Account>{
    try{
        const account = await AccountRepository.getAccountsByProviderAccountId(providerAccountId);
        if(!account){
            throw new Error('Account not found');
        }
        return account;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function updateAccount(account: Account): Promise<Account>{
    try{
        const _account = await AccountRepository.updateAccount(account);
        if(!_account){
            throw new Error('Account not updated');
        }
        return _account;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteAccount(accountId: string): Promise<Account | null>{
    try{
        const account = await AccountRepository.deleteAccount(accountId);
        if(!account){
            throw new Error('Account not found');
        }
        return account;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteAccountsByUserId(userId: string): Promise<Prisma.BatchPayload>{
    try{
        const accounts = await AccountRepository.deleteAccountsByUserId(userId);
        if(!accounts){
            throw new Error('Accounts not found');
        }
        return accounts;
    }catch(err){
        throw new Error((err as Error).message)
    }
}