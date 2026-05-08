import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function RentalFlow() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Nova Locação</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Filme Selecionado</Text>
          <Text style={styles.movieName}>O Poderoso Chefão</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF do Cliente</Text>
          <TextInput 
            style={styles.input} 
            placeholder="000.000.000-00" 
            placeholderTextColor="#666"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data de Devolução</Text>
          <TextInput 
            style={styles.input} 
            placeholder="DD/MM/AAAA" 
            placeholderTextColor="#666"
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirmar Aluguel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 30 },
  card: { 
    backgroundColor: '#333', 
    padding: 20, 
    borderRadius: 10, 
    marginBottom: 30,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50'
  },
  cardTitle: { color: '#AAA', fontSize: 14, marginBottom: 5 },
  movieName: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  inputGroup: { marginBottom: 20 },
  label: { color: '#AAA', marginBottom: 8, fontSize: 16 },
  input: { 
    backgroundColor: '#1E1E1E', 
    color: '#FFF', 
    borderRadius: 8, 
    padding: 15, 
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#444'
  },
  button: { 
    backgroundColor: '#2196F3', 
    padding: 18, 
    borderRadius: 8, 
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});
