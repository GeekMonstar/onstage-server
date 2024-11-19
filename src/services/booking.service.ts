import { Booking } from '@prisma/client';
import * as bookingRepository from '../respositories/booking.repository';

export async function createBooking(booking: bookingRepository.BookingParams): Promise<Booking>{
    try{
        const _booking = await bookingRepository.createBooking(booking);
        return _booking;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getBookings(): Promise<Booking[]>{
    try{
        const bookings = await bookingRepository.getBookings();
        return bookings;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getBooking(bookingId: string): Promise<Booking | null>{
    try{
        const booking = await bookingRepository.getBooking(bookingId);
        return booking;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getBookingsByHost(hostId: string): Promise<Booking[]>{
    try{
        const bookings = await bookingRepository.getBookingsByHost(hostId);
        return bookings;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function getBookingsByArtist(artistId: string): Promise<Booking[]>{
    try{
        const bookings = await bookingRepository.getBookingsByArtist(artistId);
        return bookings;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function updateBooking(booking: Booking): Promise<Booking>{
    try{
        const _booking = await bookingRepository.updateBooking(booking);
        return _booking;
    }catch(err){
        throw new Error((err as Error).message)
    }
}

export async function deleteBooking(bookingId: string): Promise<Booking>{
    try{
        const booking = await bookingRepository.deleteBooking(bookingId);
        return booking;
    }catch(err){
        throw new Error((err as Error).message)
    }
}