import { User } from "@prisma/client";
import db from "../lib/db";

export async function createUser(name?: string, email?: string, password?: string, role?: "USER" | "ADMIN" | undefined): Promise<User> {
    try {
        const newUser = await db.user.create({
            data: {
                name,
                email,
                password,
                role
            }
        });
        return newUser;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function getUser(userId: string): Promise<User | null> {
    try {
        const user = await db.user.findFirst({
            where: {
                id: userId
            }
        });
        return user;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function getUserByEmail(email: string): Promise<User | null> {
    try {
        const user = await db.user.findFirst({
            where: {
                email
            }
        });
        return user;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function getUsers(): Promise<User[]> {
    try {
        const users = await db.user.findMany();
        return users;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function updateUser(userId: string, name: string, email: string, password: string, role: "USER" | "ADMIN" | undefined): Promise<User> {
    try {
        const user = await db.user.update({
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
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}

export async function deleteUser(userId: string): Promise<User> {
    try {
        const user = await db.user.delete({
            where: {
                id: userId
            }
        });
        return user;
    } catch (err) {
        throw new Error((err as Error).message)
    } finally {
        db.$disconnect();
    }
}