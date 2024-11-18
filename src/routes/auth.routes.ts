import { Router } from "express";
import { callbackWithEmail, loginWithEmail, signupWithEmail } from "../controllers/auth.controller";

const authRouter = Router();

authRouter
    .post("/signup", signupWithEmail)
    .post("/login", loginWithEmail)
    .post("/callback/email/:code", callbackWithEmail)

export default authRouter;