import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pedidos from "../pages/Pedidos";
import Pedido from "../pages/Pedido";
import  { HeaderBackground }  from './styles'
const Stack = createNativeStackNavigator();

const backgroundImage = require('../../assets/gradient-background.png');

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
            elevation: 0, // Remove elevation
            shadowOpacity: 0, // Remove shadow
            backgroundColor: '#009681' 
          }
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
