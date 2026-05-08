import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, Save } from 'lucide-react-native';

export default function AddMovie({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

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
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <LinearGradient colors={['#10b981', '#059669']} style={styles.buttonGradient}>
            <Save color="#FFF" size={20} />
            <Text style={styles.buttonText}>Salvar no Acervo</Text>
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
