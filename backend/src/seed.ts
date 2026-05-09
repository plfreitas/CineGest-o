import * as dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']); // Usa Google DNS para resolver SRV records

import mongoose from 'mongoose';
import { Movie } from './models/Movie';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI || '';

if (!MONGO_URI) {
  console.error('❌ MONGO_URI não encontrada no .env');
  process.exit(1);
}

const movieData = [
  { title: 'O Poderoso Chefão', genre: 'Drama', year: '1972', available: true, synopsis: 'O patriarca de uma dinastia do crime organizado transfere o controle de seu império clandestino para seu filho relutante.', rating: 9.2, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80' },
  { title: 'Matrix', genre: 'Ficção Científica', year: '1999', available: true, synopsis: 'Um hacker aprende sobre a verdadeira natureza de sua realidade e seu papel na guerra contra seus controladores.', rating: 8.7, image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80' },
  { title: 'Interstellar', genre: 'Sci-Fi', year: '2014', available: true, synopsis: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço para garantir a sobrevivência da humanidade.', rating: 8.6, image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80' },
  { title: 'Cidade de Deus', genre: 'Crime', year: '2002', available: true, synopsis: 'Na favela do Rio de Janeiro, dois rapazes seguem caminhos diferentes: um se torna fotógrafo e o outro traficante.', rating: 8.6, image: 'https://images.unsplash.com/photo-1512113569142-8a60fccc7caa?w=400&q=80' },
  { title: 'O Cavaleiro das Trevas', genre: 'Ação', year: '2008', available: true, synopsis: 'Batman enfrenta o Coringa em uma batalha épica por Gotham City.', rating: 9.0, image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80' },
  { title: 'Pulp Fiction', genre: 'Crime', year: '1994', available: true, synopsis: 'As vidas de vários criminosos se cruzam em Los Angeles em histórias de violência e redenção.', rating: 8.9, image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80' },
  { title: 'A Origem', genre: 'Ficção Científica', year: '2010', available: true, synopsis: 'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos.', rating: 8.8, image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&q=80' },
  { title: 'Clube da Luta', genre: 'Drama', year: '1999', available: true, synopsis: 'Um homem insone e um vendedor de sabão carismático criam um clube de luta underground.', rating: 8.8, image: 'https://images.unsplash.com/photo-1518176259654-811db930c14d?w=400&q=80' },
  { title: 'Parasita', genre: 'Thriller', year: '2019', available: true, synopsis: 'Uma família pobre se infiltra na vida de uma família rica com consequências inesperadas.', rating: 8.6, image: 'https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=400&q=80' },
  { title: 'Vingadores: Ultimato', genre: 'Ação', year: '2019', available: true, synopsis: 'Os heróis sobreviventes tentam reverter os danos causados por Thanos.', rating: 8.4, image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80' },
  { title: 'Coringa', genre: 'Drama', year: '2019', available: true, synopsis: 'A origem do icônico vilão de Gotham contada sob uma ótica crua e psicológica.', rating: 8.4, image: 'https://images.unsplash.com/photo-1559535332-db997109045e?w=400&q=80' },
  { title: 'O Rei Leão', genre: 'Animação', year: '1994', available: true, synopsis: 'Um jovem príncipe leão aprende o verdadeiro significado de responsabilidade e bravura.', rating: 8.5, image: 'https://images.unsplash.com/photo-1546182208-0163b784b1e6?w=400&q=80' },
  { title: 'Forrest Gump', genre: 'Drama', year: '1994', available: true, synopsis: 'A história de um homem simples do Alabama que testemunhou e influenciou vários eventos históricos dos EUA.', rating: 8.8, image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80' },
  { title: 'O Senhor dos Anéis', genre: 'Fantasia', year: '2001', available: true, synopsis: 'Um hobbit e seus companheiros embarcam em uma jornada épica para destruir o Um Anel.', rating: 8.8, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80' },
  { title: 'Avatar', genre: 'Sci-Fi', year: '2009', available: true, synopsis: 'Um paraplégico é enviado para a lua Pandora em uma missão única.', rating: 7.8, image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80' },
];

async function seed() {
  try {
    console.log('🔗 Conectando ao MongoDB Atlas...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Conectado ao MongoDB Atlas!');
    
    await Movie.deleteMany({});
    console.log('🗑️  Base de filmes limpa.');
    
    await Movie.insertMany(movieData);
    console.log(`🎬 ${movieData.length} filmes inseridos com sucesso!`);
    
    await mongoose.connection.close();
    console.log('🎉 Seed completo! Banco populado no Atlas.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro no seeding:', error);
    process.exit(1);
  }
}

seed();
