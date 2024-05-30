import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import { Image } from "react-native";

import StackRoutes from "./stakRoutes";  
import PerfilStack from "./perfilStack";  
import Recibos from "../pages/Recibos"; 
import Perfil from "../pages/Perfil";
import PedidoIcon from '../../assets/hubicare_icon_preto.png';
import ReciboStackRoutes from "./reciboStackRoutes";

const Tab = createBottomTabNavigator();

export default function ProfissionalTabNavigator() {
    
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerTitleAlign: 'center' }}>
    <Tab.Screen 
      name="Pedidos" 
      component={StackRoutes} 
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          focused ? <Ionicons name="home" size={20} color={"#009681"} /> : <Ionicons name="home-outline" size={20} />
        ),
        headerShown: false,
        title: 'Pedidos',
        headerTitleAlign: 'center',
      }}
    />
    <Tab.Screen 
      name="Recibos" 
      component={ReciboStackRoutes} 
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          focused ? <Ionicons name="cart" size={20} color={"#009681"} /> : <Ionicons name="cart-outline" size={20} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen 
      name="Perfil" 
      component={PerfilStack} 
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (
          focused ? <Ionicons name="person-circle" size={size} color={"#009681"} /> : <Ionicons name="person-circle-outline" size={20} />
        ),
      }}
    />
   </Tab.Navigator>
  )
}