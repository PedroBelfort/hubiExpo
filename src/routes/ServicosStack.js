import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import { Text  } from 'react-native-paper';
import Servicos from "../pages/AppUser/Servicos";
import PessoaCuidada from "../pages/AppUser/PessoaCuidada";
import Faturacao from "../pages/AppUser/Faturacao";
import Checkout from "../pages/AppUser/Checkout";
import {Title,TitleBlack} from './styles'

const Stack = createNativeStackNavigator();


const ServicosStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Servicos"
      screenOptions={{
        headerTitleAlign: 'center', 
      }}
    >
      <Stack.Screen
        name="Servicos"
        component={Servicos}
        options={{
          headerShown:true,
          headerTitle: () => (
            <TitleBlack>SERVIÇOS</TitleBlack>
          ),
        }}
      />

<Stack.Screen
    name="PessoaCuidada"
    component={PessoaCuidada}
    options={{
      headerShown:false,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>PESSOA CUIDADA</Text>
      ),
    }}
  />

<Stack.Screen
    name="Faturacao"
    component={Faturacao}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>FATURAÇÃO</Text>
      ),
    }}
  />

<Stack.Screen
    name="Checkout"
    component={Checkout}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>Checkout</Text>
      ),
    }}
  />

    </Stack.Navigator>
  );
}


export default ServicosStack;
