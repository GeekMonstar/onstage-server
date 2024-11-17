"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_1 = require("../lib/tokens");
test("Test if access token is generated and is string", async () => {
    const token = await (0, tokens_1.generateAccessToken)("123");
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
});
test("Test if refresh token is generated and is string", async () => {
    const token = await (0, tokens_1.generateRefreshToken)("123");
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
});
