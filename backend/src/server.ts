import * as dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Fix DNS para SRV records do Atlas

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Movie } from './models/Movie';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Conexão com MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI || '';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Conectado ao MongoDB Atlas!'))
  .catch((err) => console.error('❌ Erro ao conectar:', err));

// Rota de saúde
app.get('/', (_req, res) => {
  res.json({ status: 'ok', message: 'CineGestão API Running! 🎬' });
});

// GET todos os filmes
app.get('/api/movies', async (_req, res) => {
  try {
    const movies = await Movie.find().sort({ rating: -1 });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
});

// GET busca por título/gênero
app.get('/api/movies/search', async (req, res) => {
  const { q } = req.query;
  try {
    const movies = await Movie.find({
      $or: [
        { title: { $regex: q as string, $options: 'i' } },
        { genre: { $regex: q as string, $options: 'i' } }
      ]
    });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'Erro na busca' });
  }
});

// PATCH atualizar disponibilidade (para alugar/devolver)
app.patch('/api/movies/:id/availability', async (req, res) => {
  const { available } = req.body;
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { available },
      { new: true }
    );
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar filme' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 CineGestão API rodando na porta ${PORT}`);
});
