import { Booking } from "@prisma/client";
import db from "../lib/db";

export async function createBooking(params: BookingParams): Promise<Booking> {
    try{
        const booking = await db.booking.create({
            data: params
        });
        return booking;
    }catch(err){
        throw new Error((err as Error).message);
    }
}

export async function getBookings(): Promise<Booking[]> {
    try{
        const bookings = await db.booking.findMany();
        return bookings;
    }catch(err){
        throw new Error((err as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getBooking(bookingId: string): Promise<Booking | null> {
    try{
        const booking = await db.booking.findUnique({
            where: {
                id: bookingId
            }
        });
        return booking;
    }catch(err){
        throw new Error((err as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getBookingsByHost(hostId: string): Promise<Booking[]> {
    try{
        const bookings = await db.booking.findMany({
            where: {
                hostId
            }
        });
        return bookings;
    }catch(err){
        throw new Error((err as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function getBookingsByArtist(artistId: string): Promise<Booking[]> {
    try{
        const bookings = await db.booking.findMany({
            where: {
                artistId
            }
        });
        return bookings;
    }catch(err){
        throw new Error((err as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function updateBooking(booking: Booking): Promise<Booking> {
    try{
        const _booking = await db.booking.update({
            where: {
                id: booking.id
            },
            data: booking
        });
        return _booking;
    }catch(err){
        throw new Error((err as Error).message);
    }finally{
        db.$disconnect();
    }
}

export async function deleteBooking(bookingId: string): Promise<Booking> {
    try{
        const booking = await db.booking.delete({
            where: {
                id: bookingId
            }
        });
        return booking;
    }catch(err){
        throw new Error((err as Error).message);
    }finally{
        db.$disconnect();
    }
}

export interface BookingParams {
    hostId: string,
    artistId: string,
    startsAt: Date,
    endsAt: Date,
}