import { AuthCode } from "@prisma/client";
import db from "../lib/db";
import { generateAccessToken, generateAuthCode } from "../lib/tokens";

export async function createAuthCode(userId: string, accountId: string): Promise<AuthCode> {
    try {
        const createdAuthCode = await db.authCode.create({
            data: {
                code: await generateAuthCode(userId, accountId),
                userId,
                accountId,
                expires: new Date(Date.now() + 60000),
                isExpired: false
            }
        });
        return createdAuthCode;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function getAuthCode(code: string): Promise<AuthCode | null> {
    try {
        const authCode = await db.authCode.findMany({
            where: {
                code,
                isExpired: false
            }
        });
        return authCode[authCode.length -1];
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function changeAuthCodeStatus(id: string): Promise<AuthCode> {
    try {
        const updatedAuthCode = await db.authCode.update({
            where: {
                id
            },
            data: {
                isExpired: true
            }
        });
        return updatedAuthCode;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}