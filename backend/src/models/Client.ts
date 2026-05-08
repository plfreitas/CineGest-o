import { Schema, model } from 'mongoose';

const ClientSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
}, { timestamps: true });

export const Client = model('Client', ClientSchema);
