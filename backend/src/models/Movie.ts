import { Schema, model } from 'mongoose';

const MovieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  synopsis: { type: String, required: true },
  cover_url: { type: String, required: true },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

export const Movie = model('Movie', MovieSchema);
