import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfissionalTabNavigator from './ProfissionalTabNavigator';
import UserTabNavigator from './UserTabNavigator';
import AuthStack from './AuthStack'; // Supondo que você tenha um stack de autenticação

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  // Substitua isso pela sua lógica de obtenção do perfil do usuário
  const userProfile = getUserProfile(); // Função fictícia para obter o perfil do usuário

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userProfile.isAuthenticated ? (
          userProfile.role === 'profissional' ? (
            <Stack.Screen name="ProfissionalTabs" component={ProfissionalTabNavigator} />
          ) : (
            <Stack.Screen name="UserTabs" component={UserTabNavigator} />
          )
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Função fictícia para obter o perfil do usuário
const getUserProfile = () => {
  // Esta função deve retornar o perfil do usuário
  // Exemplo:
  return {
    isAuthenticated: true,
    role: 'user', // ou 'admin'
  };
};

export default MainNavigator;
