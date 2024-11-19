"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.getUser = getUser;
exports.getUserByEmail = getUserByEmail;
exports.getUsers = getUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const userRepository = __importStar(require("../repositories/user.repository"));
const bcrypt_1 = require("bcrypt");
async function createUser(name, email, password, role) {
    try {
        const salt = await (0, bcrypt_1.genSalt)(10);
        const hashedPassword = password ? await (0, bcrypt_1.hash)(password, salt) : undefined;
        const user = await userRepository.createUser(name, email, hashedPassword, role);
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getUser(userId) {
    try {
        const user = await userRepository.getUser(userId);
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getUserByEmail(email) {
    try {
        const user = await userRepository.getUserByEmail(email);
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getUsers() {
    try {
        const users = await userRepository.getUsers();
        return users;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateUser(userId, name, email, password, role) {
    try {
        const user = await userRepository.updateUser(userId, name, email, password, role);
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteUser(userId) {
    try {
        const user = await userRepository.deleteUser(userId);
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
