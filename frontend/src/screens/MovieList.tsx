import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Search, ChevronLeft, Filter } from 'lucide-react-native';

const allMovies = [
  { id: '1', title: 'O Poderoso Chefão', genre: 'Drama', available: true, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80' },
  { id: '2', title: 'Matrix', genre: 'Ficção Científica', available: false, image: require('../../assets/matrix.png') },
  { id: '3', title: 'Interstellar', genre: 'Sci-Fi', available: true, image: require('../../assets/interstellar.png') },
  { id: '4', title: 'Cidade de Deus', genre: 'Crime', available: true, image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80' },
  { id: '5', title: 'Pulp Fiction', genre: 'Crime', available: false, image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&q=80' },
];

export default function MovieList({ navigation }: any) {
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
          />
          <TouchableOpacity>
            <Filter color="#94a3b8" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={allMovies}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.movieCard}>
            <Image 
              source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
              style={styles.cover} 
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.genre}>{item.genre}</Text>
              <View style={[styles.badge, { backgroundColor: item.available ? '#065f46' : '#7f1d1d' }]}>
                <Text style={[styles.status, { color: item.available ? '#34d399' : '#f87171' }]}>
                  {item.available ? 'Disponível' : 'Alugado'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
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
  title: { fontSize: 18, fontWeight: 'bold', color: '#F8FAFC' },
  genre: { fontSize: 14, color: '#64748b', marginTop: 4, marginBottom: 8 },
  badge: { alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  status: { fontSize: 12, fontWeight: '600' },
});
