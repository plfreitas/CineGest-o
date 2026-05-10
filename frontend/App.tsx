import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Dashboard from './src/screens/Dashboard';
import AddMovie from './src/screens/AddMovie';
import RentalFlow from './src/screens/RentalFlow';
import MovieList from './src/screens/MovieList';
import MovieDetails from './src/screens/MovieDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          id="main"
          initialRouteName="Dashboard"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#1E1B4B',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false
          }}
        >
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen 
            name="MovieDetails" 
            component={MovieDetails} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="AddMovie" 
            component={AddMovie} 
            options={{ headerShown: true, title: 'Adicionar Filme' }}
          />
          <Stack.Screen 
            name="RentalFlow" 
            component={RentalFlow} 
            options={{ headerShown: true, title: 'Realizar Aluguel' }}
          />
          <Stack.Screen 
            name="MovieList" 
            component={MovieList} 
            options={{ headerShown: true, title: 'Acervo Completo' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
