import { Schema, model, Types } from 'mongoose';

const RentalSchema = new Schema({
  movie_id: { type: Types.ObjectId, ref: 'Movie', required: true },
  client_id: { type: Types.ObjectId, ref: 'Client', required: true },
  rental_date: { type: Date, default: Date.now },
  due_date: { type: Date, required: true },
  status: { type: String, enum: ['Alugado', 'Devolvido', 'Atrasado'], default: 'Alugado' }
}, { timestamps: true });

export const Rental = model('Rental', RentalSchema);
