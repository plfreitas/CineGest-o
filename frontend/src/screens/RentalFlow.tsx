import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckCircle, Calendar, CreditCard } from 'lucide-react-native';

export default function RentalFlow({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Filme Selecionado</Text>
          <Text style={styles.movieName}>O Poderoso Chefão</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF do Cliente</Text>
          <View style={styles.inputWrapper}>
            <TextInput 
              style={styles.input} 
              placeholder="000.000.000-00" 
              placeholderTextColor="#4b5563"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Data de Devolução</Text>
          <View style={styles.inputWrapper}>
            <TextInput 
              style={styles.input} 
              placeholder="DD/MM/AAAA" 
              placeholderTextColor="#4b5563"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.buttonGradient}>
            <CheckCircle color="#FFF" size={20} />
            <Text style={styles.buttonText}>Confirmar Aluguel</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F0F0F' },
  content: { padding: 20 },
  card: { 
    backgroundColor: '#1E3A8A', 
    padding: 24, 
    borderRadius: 20, 
    marginBottom: 30,
    borderLeftWidth: 8,
    borderLeftColor: '#4ade80',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  cardTitle: { color: '#94a3b8', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 8 },
  movieName: { color: '#FFF', fontSize: 22, fontWeight: 'bold' },
  inputGroup: { marginBottom: 25 },
  label: { color: '#94a3b8', marginBottom: 10, fontSize: 14, fontWeight: '600' },
  inputWrapper: {
    backgroundColor: '#1A1A1A', 
    borderRadius: 15, 
    borderWidth: 1,
    borderColor: '#262626'
  },
  input: { 
    color: '#F8FAFC', 
    padding: 16, 
    fontSize: 16,
  },
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
