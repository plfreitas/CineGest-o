import { Schema, model } from 'mongoose';

const MovieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  year: { type: String },
  synopsis: { type: String, required: true },
  rating: { type: Number, default: 0 },
  image: { type: String }, // URL da imagem
  available: { type: Boolean, default: true }
}, { timestamps: true });

export const Movie = model('Movie', MovieSchema);
