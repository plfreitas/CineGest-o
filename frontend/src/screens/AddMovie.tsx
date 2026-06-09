import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Save } from 'lucide-react-native';
import { moviesApi } from '../services/api';

export default function AddMovie({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!title.trim() || !genre.trim() || !synopsis.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    try {
      setLoading(true);
      await moviesApi.createMovie({
        title: title.trim(),
        genre: genre.trim(),
        synopsis: synopsis.trim()
      });
      Alert.alert('Sucesso', 'Filme cadastrado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (error: any) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível cadastrar o filme. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Título do Filme</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: O Senhor dos Anéis" 
            placeholderTextColor="#4b5563"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gênero</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: Fantasia" 
            placeholderTextColor="#4b5563"
            value={genre}
            onChangeText={setGenre}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sinopse</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Breve descrição do filme..." 
            placeholderTextColor="#4b5563"
            multiline
            numberOfLines={4}
            value={synopsis}
            onChangeText={setSynopsis}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSave} disabled={loading}>
          <LinearGradient colors={['#10b981', '#059669']} style={styles.buttonGradient}>
            {loading ? (
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
              <>
                <Save color="#FFF" size={20} />
                <Text style={styles.buttonText}>Salvar no Acervo</Text>
              </>
            )}
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F0F' },
  content: { padding: 20 },
  inputGroup: { marginBottom: 25 },
  label: { color: '#94a3b8', marginBottom: 10, fontSize: 14, fontWeight: '600' },
  input: { 
    backgroundColor: '#1A1A1A', 
    color: '#F8FAFC', 
    borderRadius: 15, 
    padding: 16, 
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#262626'
  },
  textArea: { height: 120, textAlignVertical: 'top' },
  button: { 
    marginTop: 20,
    borderRadius: 15,
    overflow: 'hidden'
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 10
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
