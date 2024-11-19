import { VerificationToken } from "@prisma/client";
import db from "../lib/db";

export async function createVerificationToken(identifier: string, token: string, expires: Date, userId: string): Promise<VerificationToken> {
    try {
        const verificationToken = await db.verificationToken.create({
            data: {
                identifier,
                token,
                expires,
                userId
            }
        });
        return verificationToken;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function getVerificationToken(identifier: string): Promise<VerificationToken | null> {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {
                identifier
            }
        });
        return verificationToken;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function getAllVerificationTokens(): Promise<VerificationToken[]> {
    try {
        const verificationToken = await db.verificationToken.findMany();
        return verificationToken;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}