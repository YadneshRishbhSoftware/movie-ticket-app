// models/Booking.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  user: mongoose.Types.ObjectId;
  movie: mongoose.Types.ObjectId;
  seats: [string];
  bookingDate: Date;
}

const BookingSchema: Schema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Types.ObjectId, ref: 'Movie', required: true },
  seats: { type: [String], required: true },
  bookingDate: { type: Date, default: Date.now },
});

export default mongoose.model<IBooking>('Booking', BookingSchema);