import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView } from 'react-native';

const movies = [
  { id: '1', title: 'O Poderoso Chefão', genre: 'Drama', available: true, image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Matrix', genre: 'Ficção Científica', available: false, image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Interstellar', genre: 'Sci-Fi', available: true, image: 'https://via.placeholder.com/150' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>CineGestão - Acervo</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.movieCard}>
            <Image source={{ uri: item.image }} style={styles.cover} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.genre}>{item.genre}</Text>
              <Text style={[styles.status, { color: item.available ? '#4CAF50' : '#F44336' }]}>
                {item.available ? 'Disponível' : 'Alugado'}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E0E0E0',
    marginBottom: 20,
    textAlign: 'center',
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    elevation: 3,
  },
  cover: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  genre: {
    fontSize: 14,
    color: '#AAA',
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
  },
});
