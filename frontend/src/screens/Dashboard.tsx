import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Film, Users, ShoppingCart, PlusCircle, Search } from 'lucide-react-native';

const movies = [
  { id: '1', title: 'O Poderoso Chefão', genre: 'Drama', available: true, image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80' },
  { id: '2', title: 'Matrix', genre: 'Ficção Científica', available: false, image: require('../../assets/matrix.png') },
  { id: '3', title: 'Interstellar', genre: 'Sci-Fi', available: true, image: require('../../assets/interstellar.png') },
];

export default function Dashboard({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <LinearGradient
          colors={['#1e3a8a', '#1e1b4b']}
          style={styles.headerCard}
        >
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Bem-vindo,</Text>
              <Text style={styles.userName}>Pedro Freitas</Text>
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <Search color="#FFF" size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Film color="#4ade80" size={20} />
              <Text style={styles.statValue}>124</Text>
              <Text style={styles.statLabel}>Filmes</Text>
            </View>
            <View style={styles.statItem}>
              <Users color="#60a5fa" size={20} />
              <Text style={styles.statValue}>48</Text>
              <Text style={styles.statLabel}>Clientes</Text>
            </View>
            <View style={styles.statItem}>
              <ShoppingCart color="#f87171" size={20} />
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Aluguéis</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Quick Actions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
        </View>
        
        <View style={styles.quickActions}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('AddMovie')}
          >
            <LinearGradient colors={['#10b981', '#059669']} style={styles.actionGradient}>
              <PlusCircle color="#FFF" size={24} />
              <Text style={styles.actionText}>Novo Filme</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => navigation.navigate('RentalFlow')}
          >
            <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.actionGradient}>
              <ShoppingCart color="#FFF" size={24} />
              <Text style={styles.actionText}>Alugar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Acervo Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Acervo Recente</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MovieList')}>
            <Text style={styles.seeAll}>Ver tudo</Text>
          </TouchableOpacity>
        </View>

        {movies.map(item => (
          <View key={item.id} style={styles.movieCard}>
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
          </View>
        ))}

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  headerCard: {
    margin: 20,
    padding: 20,
    borderRadius: 24,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greeting: {
    color: '#94a3b8',
    fontSize: 16,
  },
  userName: {
    color: '#F8FAFC',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 12,
    borderRadius: 15,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingVertical: 15,
    borderRadius: 18,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  statLabel: {
    color: '#94a3b8',
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#3b82f6',
    fontSize: 14,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  actionGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 10,
  },
  actionText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  movieCard: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    marginHorizontal: 20,
    borderRadius: 18,
    marginBottom: 15,
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
  },
  cover: {
    width: 80,
    height: 110,
    borderRadius: 12,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  genre: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
    marginBottom: 10,
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
  },
});
