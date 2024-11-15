import Redis from "ioredis";
import session, { SessionOptions } from "express-session";
import connectRedis from "connect-redis";

// export const redisClient = new Redis({
//     host: process.env.REDIS_HOST as string || "localhost",
//     port: parseInt(process.env.REDIS_PORT as string) || 6379
// })

// const RedisStore = connectRedis(session);

export const sessionOptions = {
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: true, maxAge: 3600000 }
} as SessionOptions;