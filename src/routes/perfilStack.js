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
import Documentos from "../pages/Documentos";
import InformacaoDaContaStack from "../routes/informacaoDaContaStack";

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
            <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>ANDRÉ SANTOS</Text>
          ),
        }}
        
      />

<Stack.Screen
    name="InformacaoDaConta"
    component={InformacaoDaContaStack}
    options={{
      headerShown:false,
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


<Stack.Screen
    name="Documentos"
    component={Documentos}
    options={{
      headerShown:true,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>Documentos</Text>
      ),
    }}
  />

    </Stack.Navigator>
  );
}


export default PerfilStack;
