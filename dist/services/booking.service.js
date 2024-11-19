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
exports.createBooking = createBooking;
exports.getBookings = getBookings;
exports.getBooking = getBooking;
exports.getBookingsByHost = getBookingsByHost;
exports.getBookingsByArtist = getBookingsByArtist;
exports.updateBooking = updateBooking;
exports.deleteBooking = deleteBooking;
const bookingRepository = __importStar(require("../respositories/booking.repository"));
async function createBooking(booking) {
    try {
        const _booking = await bookingRepository.createBooking(booking);
        return _booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getBookings() {
    try {
        const bookings = await bookingRepository.getBookings();
        return bookings;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getBooking(bookingId) {
    try {
        const booking = await bookingRepository.getBooking(bookingId);
        return booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getBookingsByHost(hostId) {
    try {
        const bookings = await bookingRepository.getBookingsByHost(hostId);
        return bookings;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function getBookingsByArtist(artistId) {
    try {
        const bookings = await bookingRepository.getBookingsByArtist(artistId);
        return bookings;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function updateBooking(booking) {
    try {
        const _booking = await bookingRepository.updateBooking(booking);
        return _booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
async function deleteBooking(bookingId) {
    try {
        const booking = await bookingRepository.deleteBooking(bookingId);
        return booking;
    }
    catch (err) {
        throw new Error(err.message);
    }
}
