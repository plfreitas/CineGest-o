import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, StatusBar, TextInput, ActivityIndicator } from 'react-native';
import { Search, Star } from 'lucide-react-native';
import { moviesApi } from '../services/api';

export default function MovieList({ navigation }: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTimeout, setSearchTimeout] = useState<any>(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const response = await moviesApi.getAll();
      setMovies(response.data);
    } catch (error) {
      console.log('Erro ao carregar acervo completo:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (searchTimeout) clearTimeout(searchTimeout);

    if (text.trim() === '') {
      loadMovies();
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const response = await moviesApi.search(text);
        setMovies(response.data);
      } catch (err) {
        console.log('Erro na busca de acervo completo:', err);
      }
    }, 500);
    setSearchTimeout(timeout);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Search color="#94a3b8" size={20} />
          <TextInput 
            placeholder="Buscar no acervo..." 
            placeholderTextColor="#4b5563"
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3b82f6" />
          <Text style={styles.loadingText}>Carregando filmes...</Text>
        </View>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item, index) => item._id || item.id || index.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.movieCard}
              onPress={() => navigation.navigate('MovieDetails', { movie: item })}
            >
              <Image 
                source={{ uri: item.image || 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80' }} 
                style={styles.cover} 
              />
              <View style={styles.info}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                  <View style={styles.ratingBadge}>
                    <Star color="#fbbf24" size={12} fill="#fbbf24" />
                    <Text style={styles.ratingText}>{item.rating || '5.0'}</Text>
                  </View>
                </View>
                <Text style={styles.genre}>{item.genre}</Text>
                <View style={[styles.badge, { backgroundColor: item.available ? 'rgba(74,222,128,0.1)' : 'rgba(248,113,113,0.1)' }]}>
                  <Text style={[styles.status, { color: item.available ? '#4ade80' : '#f87171' }]}>
                    {item.available ? '● Disponível' : '● Alugado'}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhum filme encontrado.</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F0F' },
  header: { padding: 20 },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#262626',
  },
  searchInput: {
    flex: 1,
    color: '#FFF',
    marginLeft: 10,
    fontSize: 16,
  },
  listContent: { paddingHorizontal: 20, paddingBottom: 40 },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 18,
    marginBottom: 15,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
  },
  cover: {
    width: 70,
    height: 100,
    borderRadius: 12,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#F8FAFC', flex: 1 },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  ratingText: { color: '#fbbf24', fontWeight: 'bold', fontSize: 12 },
  genre: { fontSize: 14, color: '#64748b', marginTop: 4, marginBottom: 8 },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  status: { fontSize: 11, fontWeight: 'bold' },
  loadingContainer: { alignItems: 'center', paddingVertical: 40 },
  loadingText: { color: '#64748b', marginTop: 12, fontSize: 16 },
  emptyContainer: { alignItems: 'center', paddingVertical: 40 },
  emptyText: { color: '#64748b', fontSize: 16 },
});
