import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pedidos from "../pages/Pedidos";
import Pedido from "../pages/Pedido";
import {LinearGradient} from 'expo-linear-gradient';
import { Text  } from 'react-native-paper';
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
          colors={['#009581', '#038F87', '#038F87',  '#038F87','#049187','#2554BD']}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
      ),
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#FFF', fontSize: 20, fontWeight:600 }}>HUBICARE</Text>
      ),
    }}
  />
      <Stack.Screen
        name="Pedido"
        component={Pedido}
      />
    </Stack.Navigator>
  );
}


export default StackRoutes;
