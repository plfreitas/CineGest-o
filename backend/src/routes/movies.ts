import express from 'express';

const router = express.Router();

// Mock data (seria substituído por MongoDB futuramente)
const movies = [
  { id: '1', title: 'O Poderoso Chefão', genre: 'Drama', available: true },
  { id: '2', title: 'Matrix', genre: 'Ficção Científica', available: false },
  { id: '3', title: 'Interstellar', genre: 'Sci-Fi', available: true },
];

router.get('/', (req, res) => {
  res.json(movies);
});

router.post('/', (req, res) => {
  const newMovie = req.body;
  movies.push({ id: (movies.length + 1).toString(), ...newMovie });
  res.status(201).json(newMovie);
});

export default router;
