import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pedidos from "../pages/Pedidos";
import Pedido from "../pages/Pedido";
import ServicoRealizado from "../pages/ServicoRealizado";
import {LinearGradient} from 'expo-linear-gradient';
import { Text  } from 'react-native-paper';
import Perfil from "../pages/Perfil";
import InformacaoDaConta from "../pages/InformacaoDaConta";

const Stack = createNativeStackNavigator();


const PerfilStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{
        headerTitleAlign: 'center', 
      }}
    >
      <Stack.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown:true,
          headerTitle: () => (
            <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>André Santos</Text>
          ),
        }}
        
      />

<Stack.Screen
    name="InformacaoDaConta"
    component={InformacaoDaConta}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>INFORMAÇÃO DA CONTA</Text>
      ),
    }}
  />

    </Stack.Navigator>
  );
}


export default PerfilStack;
