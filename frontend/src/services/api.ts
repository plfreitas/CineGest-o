import axios from 'axios';

// IP do computador na rede local — o celular (mesmo WiFi) vai usar este endereço
// Para compartilhar externamente, use 'npx expo start --tunnel'
const BASE_URL = 'http://192.168.15.4:3000';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const moviesApi = {
  getAll: () => api.get('/api/movies'),
  search: (q: string) => api.get(`/api/movies/search?q=${encodeURIComponent(q)}`),
  updateAvailability: (id: string, available: boolean) => 
    api.patch(`/api/movies/${id}/availability`, { available }),
  createMovie: (movieData: { title: string; genre: string; synopsis: string; year?: string; rating?: number; image?: string }) =>
    api.post('/api/movies', movieData),
};
