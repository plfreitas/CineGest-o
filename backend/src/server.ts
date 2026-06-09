import * as dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Fix DNS para SRV records do Atlas

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Movie } from './models/Movie';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 3000;

// 🛡️ Segurança: Headers HTTP seguros
app.use(helmet());

// 🛡️ Segurança: Rate limiting — máx 100 req por 15min por IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Muitas requisições, tente novamente em 15 minutos.' },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api/', limiter);

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

// POST criar novo filme
app.post('/api/movies', async (req, res) => {
  let { title, genre, year, synopsis, rating, image, available } = req.body;

  // Validação básica dos campos obrigatórios
  if (!title || typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'O campo "title" é obrigatório e deve ser uma string.' });
  }
  if (!genre || typeof genre !== 'string' || !genre.trim()) {
    return res.status(400).json({ error: 'O campo "genre" é obrigatório e deve ser uma string.' });
  }
  if (!synopsis || typeof synopsis !== 'string' || !synopsis.trim()) {
    return res.status(400).json({ error: 'O campo "synopsis" é obrigatório e deve ser uma string.' });
  }

  // Sanitização básica contra HTML/XSS nos campos de texto
  const sanitize = (val: string) => val.replace(/<[^>]*>/g, '').trim();
  title = sanitize(title);
  genre = sanitize(genre);
  synopsis = sanitize(synopsis);
  if (year && typeof year === 'string') year = sanitize(year);
  if (image && typeof image === 'string') image = sanitize(image);

  try {
    const movie = new Movie({
      title,
      genre,
      year: year || new Date().getFullYear().toString(),
      synopsis,
      rating: typeof rating === 'number' ? rating : 5.0,
      image: image || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
      available: typeof available === 'boolean' ? available : true
    });

    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao cadastrar filme no banco de dados' });
  }
});

// GET busca por título/gênero
app.get('/api/movies/search', async (req, res) => {
  const { q } = req.query;
  if (!q || typeof q !== 'string') {
    return res.status(400).json({ error: 'Parâmetro de busca obrigatório' });
  }
  // 🛡️ Sanitização: escapa caracteres especiais de regex
  const safeQuery = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try {
    const movies = await Movie.find({
      $or: [
        { title: { $regex: safeQuery, $options: 'i' } },
        { genre: { $regex: safeQuery, $options: 'i' } }
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
  if (typeof available !== 'boolean') {
    return res.status(400).json({ error: 'Campo "available" deve ser boolean' });
  }
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      { available },
      { new: true }
    );
    if (!movie) return res.status(404).json({ error: 'Filme não encontrado' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar filme' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 CineGestão API rodando na porta ${PORT}`);
  console.log(`🛡️ Helmet + Rate Limit ativos`);
});
