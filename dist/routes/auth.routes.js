"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter
    .post("/signup", auth_controller_1.signupWithEmail)
    .post("/login", auth_controller_1.loginWithEmail)
    .post("/callback/email/:code", auth_controller_1.callbackWithEmail);
exports.default = authRouter;
