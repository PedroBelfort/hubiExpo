import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/routes/AuthStack';
import ProfissionalTabNavigator from './src/routes/ProfissionalTabNavigator';
import MainNavigator from './src/routes/MainNavigator';

export default function App() {
  return (
      <MainNavigator />
  );
}