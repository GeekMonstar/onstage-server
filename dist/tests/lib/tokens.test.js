"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const tokens_1 = require("../../lib/tokens");
const originalEnv = { ...process.env };
beforeAll(() => {
    process.env.ACCESS_TOKEN_SECRET = "7c78a369c24978b6575faebf1d87bbe76f82a031ae62e5092b02965ed6204fa4";
    process.env.REFRESH_TOKEN_SECRET = "c6d64d545a5a3f81f8c3d88b6f97dfc394f671aa65ae7bc2e1e6233ef6a9d495";
});
(0, globals_1.test)("Test if access token is generated and is string", async () => {
    const token = await (0, tokens_1.generateAccessToken)("123");
    (0, globals_1.expect)(token).toBeDefined();
    (0, globals_1.expect)(typeof token).toBe("string");
});
(0, globals_1.test)("Test if refresh token is generated and is string", async () => {
    const token = await (0, tokens_1.generateRefreshToken)("123");
    (0, globals_1.expect)(token).toBeDefined();
    (0, globals_1.expect)(typeof token).toBe("string");
});
afterAll(() => {
    process.env = originalEnv;
});
(0, globals_1.test)("2 + 2 = 4", () => {
    const a = 2 + 2;
    (0, globals_1.expect)(a).toBe(4);
});
