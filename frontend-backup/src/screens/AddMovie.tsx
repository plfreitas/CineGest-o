import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Novo Filme</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Título do Filme</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: O Senhor dos Anéis" 
            placeholderTextColor="#666"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Gênero</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex: Fantasia" 
            placeholderTextColor="#666"
            value={genre}
            onChangeText={setGenre}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Sinopse</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Breve descrição do filme..." 
            placeholderTextColor="#666"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Salvar no Acervo</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 30 },
  inputGroup: { marginBottom: 20 },
  label: { color: '#AAA', marginBottom: 8, fontSize: 16 },
  input: { 
    backgroundColor: '#1E1E1E', 
    color: '#FFF', 
    borderRadius: 8, 
    padding: 15, 
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  textArea: { height: 100, textAlignVertical: 'top' },
  button: { 
    backgroundColor: '#4CAF50', 
    padding: 18, 
    borderRadius: 8, 
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
