"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = createBooking;
exports.getBookings = getBookings;
exports.getBooking = getBooking;
exports.getBookingsByHost = getBookingsByHost;
exports.getBookingsByArtist = getBookingsByArtist;
exports.updateBooking = updateBooking;
exports.deleteBooking = deleteBooking;
const db_1 = __importDefault(require("../lib/db"));
async function createBooking(params) {
    try {
        const booking = await db_1.default.booking.create({
            data: params
        });
        return booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getBookings() {
    try {
        const bookings = await db_1.default.booking.findMany();
        return bookings;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getBooking(bookingId) {
    try {
        const booking = await db_1.default.booking.findUnique({
            where: {
                id: bookingId
            }
        });
        return booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getBookingsByHost(hostId) {
    try {
        const bookings = await db_1.default.booking.findMany({
            where: {
                hostId
            }
        });
        return bookings;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function getBookingsByArtist(artistId) {
    try {
        const bookings = await db_1.default.booking.findMany({
            where: {
                artistId
            }
        });
        return bookings;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function updateBooking(booking) {
    try {
        const _booking = await db_1.default.booking.update({
            where: {
                id: booking.id
            },
            data: booking
        });
        return _booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
async function deleteBooking(bookingId) {
    try {
        const booking = await db_1.default.booking.delete({
            where: {
                id: bookingId
            }
        });
        return booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
    finally {
        db_1.default.$disconnect();
    }
}
