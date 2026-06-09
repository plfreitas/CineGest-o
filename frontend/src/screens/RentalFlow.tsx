import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckCircle } from 'lucide-react-native';
import { moviesApi } from '../services/api';

export default function RentalFlow({ route, navigation }: any) {
  const { movie } = route.params || { movie: { title: 'Nenhum filme selecionado', _id: '', id: '' } };
  const [cpf, setCpf] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (!cpf.trim() || !dueDate.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validação simples de formato de CPF (mínimo 11 dígitos ou caracteres normativos)
    const cleanCpf = cpf.replace(/\D/g, '');
    if (cleanCpf.length !== 11) {
      Alert.alert('Erro', 'O CPF informado deve conter 11 dígitos.');
      return;
    }

    try {
      setLoading(true);
      const movieId = movie._id || movie.id;
      if (!movieId) {
        Alert.alert('Erro', 'Filme inválido.');
        return;
      }
      await moviesApi.updateAvailability(movieId, false);
      Alert.alert('Sucesso', `Aluguel de "${movie.title}" registrado com sucesso!`, [
        { text: 'OK', onPress: () => navigation.navigate('Dashboard') }
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Falha ao registrar aluguel. Verifique a conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Filme Selecionado</Text>
          <Text style={styles.movieName}>{movie.title}</Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>CPF do Cliente</Text>
          <View style={styles.inputWrapper}>
            <TextInput 
              style={styles.input} 
              placeholder="000.000.000-00" 
              placeholderTextColor="#4b5563"
              keyboardType="numeric"
              value={cpf}
              onChangeText={setCpf}
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
              value={dueDate}
              onChangeText={setDueDate}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleConfirm} disabled={loading}>
          <LinearGradient colors={['#3b82f6', '#2563eb']} style={styles.buttonGradient}>
            {loading ? (
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
              <>
                <CheckCircle color="#FFF" size={20} />
                <Text style={styles.buttonText}>Confirmar Aluguel</Text>
              </>
            )}
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
