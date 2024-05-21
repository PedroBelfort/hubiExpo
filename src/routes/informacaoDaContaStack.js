import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import { Text  } from 'react-native-paper';
import InformacaoDaConta from "../pages/InformacaoDaConta";
import AtualizacaoDeEmail from "../pages/AtualizacaoDeEmail";
import CodigoDeConfirmacao from "../pages/CodigoDeConfirmacao";
import Telemovel from "../pages/Telemovel";

const Stack = createNativeStackNavigator();


const InformacaoDaContaStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="InformacaoDaConta"
      screenOptions={{
        headerTitleAlign: 'center', 
      }}
    >
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

<Stack.Screen
    name="Telemovel"
    component={Telemovel}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>TELEMÓVEL</Text>
      ),
    }}
  />

<Stack.Screen
    name="CodigoDeConfirmacao"
    component={CodigoDeConfirmacao}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>CÓDIGO DE CONFIRMAÇÃO</Text>
      ),
    }}
  />

<Stack.Screen
    name="AtualizacaoDeEmail"
    component={AtualizacaoDeEmail}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>EMAIL</Text>
      ),
    }}
  />
    </Stack.Navigator>
  );
}


export default InformacaoDaContaStack;
