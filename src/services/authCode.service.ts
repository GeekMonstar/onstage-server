import { AuthCode } from '@prisma/client';
import * as authCodeRepository from '../repositories/authCode.repository';

export async function createAuthCode(userId: string, accountId: string): Promise<AuthCode> {
    try {
        const createdAuthCode = await authCodeRepository.createAuthCode(userId, accountId);
        return createdAuthCode;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getAuthCode(code: string): Promise<AuthCode | null> {
    try {
        const authCode = await authCodeRepository.getAuthCode(code);
        return authCode;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function changeAuthCodeStatus(id: string): Promise<AuthCode> {
    try {
        const updatedAuthCode = await authCodeRepository.changeAuthCodeStatus(id);
        return updatedAuthCode;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}