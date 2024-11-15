import { Router } from "express";
import { loginWithEmail, signupWithEmail } from "../controllers/auth.controller";

const authRouter = Router();

authRouter
    .post("/signup", signupWithEmail)
    .post("/login", loginWithEmail)

export default authRouter;