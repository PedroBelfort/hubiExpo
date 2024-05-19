import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pedidos from "../pages/Pedidos";
import Pedido from "../pages/Pedido";
import ServicoRealizado from "../pages/ServicoRealizado";
import {LinearGradient} from 'expo-linear-gradient';

import {Title,TitleBlack} from './styles'
const Stack = createNativeStackNavigator();


const StackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Pedidos"
      screenOptions={{
        headerTitleAlign: 'center', 
      }}
    >
       <Stack.Screen
    name="HUBICARE"
    component={Pedidos}
    options={{
      headerTintColor: '#FFF',
      headerStyle: {
        elevation: 0, 
        shadowOpacity: 0, 
        backgroundColor: 'transparent', 
      },
      headerBackground: () => (
        <LinearGradient
          colors={['#009681', '#009681']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      ),
      headerTitle: () => (
        <Title>HUBICARE</Title>
      ),
    }}
  />
      <Stack.Screen
        name="Pedido"
        component={Pedido}
        options={{
          headerShown:true,
          headerTitle: () => (
              <TitleBlack>EUNICE DA SILVA</TitleBlack>
          ),
        }}
      />

    </Stack.Navigator>
  );
}


export default StackRoutes;
