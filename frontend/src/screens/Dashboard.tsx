import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, StatusBar, TextInput, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Film, Users, ShoppingCart, PlusCircle, Search, Star } from 'lucide-react-native';
import { moviesApi } from '../services/api';
import { MOVIES } from '../data/movies'; // Fallback local

export default function Dashboard({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTimeout, setSearchTimeout] = useState<any>(null);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const response = await moviesApi.getAll();
      setMovies(response.data.slice(0, 6));
    } catch (error) {
      // Fallback para dados locais se API offline
      console.log('API offline, usando dados locais');
      setMovies(MOVIES.slice(0, 6));
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

    // Debounce: espera 500ms antes de buscar
    const timeout = setTimeout(async () => {
      try {
        const response = await moviesApi.search(text);
        setMovies(response.data);
      } catch {
        // Fallback local
        const filtered = MOVIES.filter(m =>
          m.title.toLowerCase().includes(text.toLowerCase()) ||
          m.genre.toLowerCase().includes(text.toLowerCase())
        );
        setMovies(filtered);
      }
    }, 500);
    setSearchTimeout(timeout);
  };

  const totalAvailable = movies.filter(m => m.available).length;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <LinearGradient colors={['#1e3a8a', '#1e1b4b']} style={styles.headerCard}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Bem-vindo,</Text>
              <Text style={styles.userName}>Pedro Freitas</Text>
            </View>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>PF</Text>
            </View>
          </View>

          <View style={styles.searchBar}>
            <Search color="#94a3b8" size={20} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar filmes ou gêneros..."
              placeholderTextColor="#94a3b8"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Film color="#4ade80" size={20} />
              <Text style={styles.statValue}>{movies.length}</Text>
              <Text style={styles.statLabel}>Filmes</Text>
            </View>
            <View style={styles.statItem}>
              <Users color="#60a5fa" size={20} />
              <Text style={styles.statValue}>48</Text>
              <Text style={styles.statLabel}>Clientes</Text>
            </View>
            <View style={styles.statItem}>
              <ShoppingCart color="#f87171" size={20} />
              <Text style={styles.statValue}>{totalAvailable}</Text>
              <Text style={styles.statLabel}>Disponíveis</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Ações Rápidas */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        </View>
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AddMovie')}>
            <LinearGradient colors={['#10b981', '#059669']} style={styles.actionGradient}>
              <PlusCircle color="#FFF" size={24} />
              <Text style={styles.actionText}>Novo Filme</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('RentalFlow')}>
            <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.actionGradient}>
              <ShoppingCart color="#FFF" size={24} />
              <Text style={styles.actionText}>Alugar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Lista de Filmes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {searchQuery ? `Resultados (${movies.length})` : 'Acervo'}
          </Text>
          {!searchQuery && (
            <TouchableOpacity onPress={() => navigation.navigate('MovieList')}>
              <Text style={styles.seeAll}>Ver tudo</Text>
            </TouchableOpacity>
          )}
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3b82f6" />
            <Text style={styles.loadingText}>Carregando filmes...</Text>
          </View>
        ) : movies.length > 0 ? (
          movies.map((item, index) => (
            <TouchableOpacity
              key={item._id || item.id || index}
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
                    <Text style={styles.ratingText}>{item.rating}</Text>
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
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Film color="#334155" size={64} />
            <Text style={styles.emptyText}>Nenhum filme encontrado.</Text>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F0F' },
  headerCard: { margin: 20, padding: 20, borderRadius: 24, elevation: 10 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { color: '#94a3b8', fontSize: 16 },
  userName: { color: '#F8FAFC', fontSize: 24, fontWeight: 'bold' },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#3b82f6', justifyContent: 'center', alignItems: 'center' },
  avatarText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 15, paddingHorizontal: 15, height: 50, marginBottom: 20 },
  searchInput: { flex: 1, color: '#FFF', marginLeft: 10, fontSize: 16 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'rgba(0,0,0,0.2)', paddingVertical: 15, borderRadius: 18 },
  statItem: { alignItems: 'center' },
  statValue: { color: '#FFF', fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  statLabel: { color: '#94a3b8', fontSize: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, marginTop: 10, marginBottom: 15 },
  sectionTitle: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  seeAll: { color: '#3b82f6', fontSize: 14 },
  quickActions: { flexDirection: 'row', paddingHorizontal: 15, marginBottom: 20 },
  actionButton: { flex: 1, marginHorizontal: 5, borderRadius: 15, overflow: 'hidden' },
  actionGradient: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 15, gap: 10 },
  actionText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },
  loadingContainer: { alignItems: 'center', paddingVertical: 40 },
  loadingText: { color: '#64748b', marginTop: 12, fontSize: 16 },
  movieCard: { flexDirection: 'row', backgroundColor: '#1A1A1A', marginHorizontal: 20, borderRadius: 18, marginBottom: 15, padding: 12, alignItems: 'center', borderWidth: 1, borderColor: '#262626' },
  cover: { width: 80, height: 110, borderRadius: 12 },
  info: { marginLeft: 15, flex: 1 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#F8FAFC', flex: 1 },
  ratingBadge: { flexDirection: 'row', alignItems: 'center', gap: 3 },
  ratingText: { color: '#fbbf24', fontWeight: 'bold', fontSize: 12 },
  genre: { fontSize: 13, color: '#64748b', marginTop: 4, marginBottom: 8 },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 8 },
  status: { fontSize: 11, fontWeight: 'bold' },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', marginTop: 40, opacity: 0.5 },
  emptyText: { color: '#64748b', marginTop: 10, fontSize: 16 },
});
