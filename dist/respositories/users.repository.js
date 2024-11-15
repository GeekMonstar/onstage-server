"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserWhithEmail = createUserWhithEmail;
exports.createUserWhithOutEmail = createUserWhithOutEmail;
exports.getUser = getUser;
exports.getUserByEmail = getUserByEmail;
exports.getUsers = getUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const db_1 = __importDefault(require("../lib/db"));
async function createUserWhithEmail(name, email, password, role) {
    try {
        const newUser = await db_1.default.user.create({
            data: {
                name,
                email,
                password,
                role
            }
        });
        return newUser;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function createUserWhithOutEmail() {
    try {
        const newUser = await db_1.default.user.create({
            data: {}
        });
        return newUser;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getUser(userId) {
    try {
        const user = await db_1.default.user.findFirst({
            where: {
                id: userId
            }
        });
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getUserByEmail(email) {
    try {
        const user = await db_1.default.user.findFirst({
            where: {
                email
            }
        });
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getUsers() {
    try {
        const users = await db_1.default.user.findMany();
        return users;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function updateUser(userId, name, email, password, role) {
    try {
        const user = await db_1.default.user.update({
            where: {
                id: userId
            },
            data: {
                name,
                email,
                password,
                role
            }
        });
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteUser(userId) {
    try {
        const user = await db_1.default.user.delete({
            where: {
                id: userId
            }
        });
        return user;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
