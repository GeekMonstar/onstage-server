import { generateAccessToken, generateRefreshToken } from "../../lib/tokens";

test("Test if access token is generated and is string", async () => {
    const token = await generateAccessToken("123");
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
});

test("Test if refresh token is generated and is string", async () => {
    const token = await generateRefreshToken("123");
    expect(token).toBeDefined();
    expect(typeof token).toBe("string");
});