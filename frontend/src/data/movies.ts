export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: string;
  synopsis: string;
  available: boolean;
  image: any;
  rating: number;
}

export const MOVIES: Movie[] = [
  {
    id: '1',
    title: 'O Poderoso Chefão',
    genre: 'Drama / Crime',
    year: '1972',
    synopsis: 'Uma família mafiosa luta para estabelecer seu domínio nos Estados Unidos após a Segunda Guerra Mundial.',
    available: true,
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80',
    rating: 9.2
  },
  {
    id: '2',
    title: 'Matrix',
    genre: 'Ficção Científica',
    year: '1999',
    synopsis: 'Um programador descobre que o mundo em que vive é uma simulação virtual criada por máquinas.',
    available: false,
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&q=80',
    rating: 8.7
  },
  {
    id: '3',
    title: 'Interstellar',
    genre: 'Sci-Fi / Adventure',
    year: '2014',
    synopsis: 'Uma equipe de exploradores viaja através de um buraco de minhoca no espaço em uma tentativa de garantir a sobrevivência da humanidade.',
    available: true,
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80',
    rating: 8.6
  },
  {
    id: '4',
    title: 'O Cavaleiro das Trevas',
    genre: 'Ação / Drama',
    year: '2008',
    synopsis: 'Batman enfrenta seu maior desafio: o Coringa, um criminoso que busca instaurar o caos em Gotham City.',
    available: true,
    image: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&q=80',
    rating: 9.0
  },
  {
    id: '5',
    title: 'Pulp Fiction',
    genre: 'Crime / Drama',
    year: '1994',
    synopsis: 'As vidas de dois assassinos, um boxeador e um casal de assaltantes se cruzam em quatro histórias de violência e redenção.',
    available: true,
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80',
    rating: 8.9
  },
  {
    id: '6',
    title: 'A Origem',
    genre: 'Ação / Sci-Fi',
    year: '2010',
    synopsis: 'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos.',
    available: false,
    image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=400&q=80',
    rating: 8.8
  },
  {
    id: '7',
    title: 'Clube da Luta',
    genre: 'Drama',
    year: '1999',
    synopsis: 'Um homem insone e um vendedor de sabão carismático criam um clube de luta underground.',
    available: true,
    image: 'https://images.unsplash.com/photo-1518176259654-811db930c14d?w=400&q=80',
    rating: 8.8
  },
  {
    id: '8',
    title: 'Vingadores: Ultimato',
    genre: 'Ação / Aventura',
    year: '2019',
    synopsis: 'Após Thanos eliminar metade de todas as criaturas vivas, os Vingadores devem se reunir para desfazer suas ações.',
    available: true,
    image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80',
    rating: 8.4
  }
];
