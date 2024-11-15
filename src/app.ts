import { config } from "dotenv";
import express, {static as _static, json} from "express"
import session from "express-session";
import { sessionOptions } from "./lib/sessiondb";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes";
import db from "./lib/db";

config({});

const app = express();
console.log("session secret:", process.env.SESSION_SECRET);

app
    .use(session({secret: process.env.SESSION_SECRET as string, resave: false, saveUninitialized: false, cookie: {httpOnly: true, secure: true, maxAge: 3600000}}))
    .use(_static("public"))
    .use(json())
    .use(cookieParser())
    .use("/auth", authRouter)
    .use("/users", async (req, res) => {
        const accounts = await db.user.deleteMany();
        console.log(accounts);
        res.json(accounts);
    })
    .get("/", (req, res) => {
        res.send("Hello World");
    })


export default app;