import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, Star, Clock, Calendar, Play } from 'lucide-react-native';

export default function MovieDetails({ route, navigation }: any) {
  const { movie } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeft color="#FFF" size={28} />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Poster Image */}
        <Image 
          source={typeof movie.image === 'string' ? { uri: movie.image } : movie.image} 
          style={styles.poster}
          resizeMode="cover"
        />
        
        <LinearGradient
          colors={['transparent', '#0F0F0F']}
          style={styles.gradient}
        />

        <View style={styles.content}>
          <View style={styles.topInfo}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={styles.ratingContainer}>
              <Star color="#fbbf24" size={20} fill="#fbbf24" />
              <Text style={styles.ratingText}>{movie.rating}</Text>
            </View>
          </View>

          <View style={styles.metaContainer}>
            <View style={styles.metaItem}>
              <Calendar color="#64748b" size={16} />
              <Text style={styles.metaText}>{movie.year}</Text>
            </View>
            <View style={styles.metaItem}>
              <Clock color="#64748b" size={16} />
              <Text style={styles.metaText}>124 min</Text>
            </View>
            <View style={styles.genreBadge}>
              <Text style={styles.genreText}>{movie.genre}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Sinopse</Text>
          <Text style={styles.synopsis}>{movie.synopsis}</Text>

          <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.playButton}>
              <Play color="#FFF" size={24} fill="#FFF" />
              <Text style={styles.playText}>Assistir Trailer</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.rentButton, { opacity: movie.available ? 1 : 0.5 }]}
              disabled={!movie.available}
              onPress={() => navigation.navigate('RentalFlow', { movie })}
            >
              <Text style={styles.rentText}>
                {movie.available ? 'Alugar Agora' : 'Indisponível'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: 50 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    padding: 8,
  },
  poster: {
    width: '100%',
    height: 450,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: 450,
    top: 0,
  },
  content: {
    marginTop: -80,
    paddingHorizontal: 20,
  },
  topInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 15,
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: 'rgba(251, 191, 36, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  ratingText: {
    color: '#fbbf24',
    fontSize: 18,
    fontWeight: 'bold',
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginBottom: 25,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    color: '#94a3b8',
    fontSize: 14,
  },
  genreBadge: {
    backgroundColor: '#1e3a8a',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  genreText: {
    color: '#60a5fa',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  synopsis: {
    color: '#94a3b8',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  actionContainer: {
    gap: 15,
  },
  playButton: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  playText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rentButton: {
    backgroundColor: '#3b82f6',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rentText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
