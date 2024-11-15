"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionOptions = void 0;
// export const redisClient = new Redis({
//     host: process.env.REDIS_HOST as string || "localhost",
//     port: parseInt(process.env.REDIS_PORT as string) || 6379
// })
// const RedisStore = connectRedis(session);
exports.sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: true, maxAge: 3600000 }
};
