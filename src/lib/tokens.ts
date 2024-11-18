import { sign } from 'jsonwebtoken';

export async function generateAccessToken(userId: string): Promise<string> {
    return sign({ userId, timestamp: Date.now()}, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' });
}

export async function generateRefreshToken(userId: string): Promise<string> {
    return sign({ userId, timestamp: Date.now()}, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' });
}

export async function generateAuthCode(userId: string, accountId: string): Promise<string> {
    return sign({ userId, accountId, timestamp: Date.now()}, process.env.AUTH_CODE_SECRET!, { expiresIn: '15m' });
}