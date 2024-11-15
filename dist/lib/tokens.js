"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = generateAccessToken;
exports.generateRefreshToken = generateRefreshToken;
const jsonwebtoken_1 = require("jsonwebtoken");
async function generateAccessToken(userId) {
    return (0, jsonwebtoken_1.sign)({ userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}
async function generateRefreshToken(userId) {
    return (0, jsonwebtoken_1.sign)({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}
