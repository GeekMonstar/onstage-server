import { sign } from 'jsonwebtoken';

export async function generateAccessToken(userId: string): Promise<string> {
    return sign({ userId}, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: '15m' });
}

export async function generateRefreshToken(userId: string): Promise<string> {
    return sign({ userId}, process.env.REFRESH_TOKEN_SECRET!, { expiresIn: '7d' });
}