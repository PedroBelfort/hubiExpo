import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";;
import { Text  } from 'react-native-paper';
import Perfil from "../pages/Perfil";
import InformacaoDaConta from "../pages/InformacaoDaConta";
import DadosDeFaturacao from "../pages/DadosDeFaturacao";
import DadosPessoais from "../pages/DadosPessoais";
import ObterAjuda from "../pages/ObterAjuda";
import InformacaoProfissional from "../pages/InformacaoProfissional";
import Seguranca from "../pages/Seguranca";

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

<Stack.Screen
    name="DadosDeFaturacao"
    component={DadosDeFaturacao}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>DADOS DE FATURAÇÃO</Text>
      ),
    }}
  />

<Stack.Screen
    name="DadosPessoais"
    component={DadosPessoais}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>DADOS PESSOAIS</Text>
      ),
    }}
  />

<Stack.Screen
    name="ObterAjuda"
    component={ObterAjuda}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>DADOS PESSOAIS</Text>
      ),
    }}
  />

<Stack.Screen
    name="InformacaoProfissional"
    component={InformacaoProfissional}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>Informação Profissional</Text>
      ),
    }}
  />

<Stack.Screen
    name="Seguranca"
    component={Seguranca}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>Informação Profissional</Text>
      ),
    }}
  />


    </Stack.Navigator>
  );
}


export default PerfilStack;
