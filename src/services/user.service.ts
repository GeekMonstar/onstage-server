import { User } from '@prisma/client';
import * as userRepository from '../respositories/user.repository';
import { genSalt, hash } from 'bcrypt';

export async function createUser(name: string, email: string, password: string, role: "USER" | "ADMIN" | undefined): Promise<User> {
    try {
        const salt = await genSalt(10);
        const hashedPassword = password ? await hash(password, salt) : undefined;
        const user = await userRepository.createUser(name, email, hashedPassword, role);
        return user;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getUser(userId: string): Promise<User | null> {
    try {
        const user = await userRepository.getUser(userId);
        return user;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getUserByEmail(email: string): Promise<User | null> {
    try {
        const user = await userRepository.getUserByEmail(email);
        return user;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function getUsers(): Promise<User[]> {
    try {
        const users = await userRepository.getUsers();
        return users;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function updateUser(userId: string, name: string, email: string, password: string, role: "USER" | "ADMIN" | undefined): Promise<User> {
    try {
        const user = await userRepository.updateUser(userId, name, email, password, role);
        return user;
    } catch (err) {
        throw new Error((err as Error).message)
    }
}

export async function deleteUser(userId: string): Promise<User | null> {
    try {
        const user = await userRepository.deleteUser(userId);
        return user;
    } catch (err) {
        throw new Error((err as Error).message);
    }
}