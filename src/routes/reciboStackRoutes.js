import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServicoRealizado from "../pages/ServicoRealizado";
import { Text  } from 'react-native-paper';
import Recibos from "../pages/Recibos";
import Recibo from "../pages/Recibo";
import Fatura from "../pages/Fatura";

const Stack = createNativeStackNavigator();


const ReciboStackRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Recibos"
      screenOptions={{
        headerTitleAlign: 'center', 
      }}
    >
       <Stack.Screen
    name="Recibos"
    component={Recibos}
    options={{
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>RECIBOS</Text>
      ),
   
    }}
  />
<Stack.Screen
        name="ServicoRealizado"
        component={ServicoRealizado}
        options={{
          headerTitle: () => (
            <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>EUNICE SILVA</Text>
          ),
        }}
      />
      <Stack.Screen
        name="Recibo"
        component={Recibo}
        options={{
          headerTitle: () => (
            <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>RECIBO</Text>
          ),
        }}
      />
      <Stack.Screen
        name="Fatura"
        component={Fatura}
        options={{
          headerTitle: () => (
            <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>FATURA</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}


export default ReciboStackRoutes;
