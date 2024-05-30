import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import { Image } from "react-native";

import StackRoutes from "./stakRoutes";  
import PerfilStack from "./perfilStack";  
import Pesquisa from "../pages/AppUser/Pesquisa";
import Perfil from "../pages/Perfil";
import PedidoIcon from '../../assets/hubicare_icon_preto.png';
import ReciboStackRoutes from "./reciboStackRoutes";
import Servicos from "../pages/AppUser/Servicos";
import ServicosStack from "./ServicosStack";
import {LinearGradient} from 'expo-linear-gradient';
import {Title,TitleBlack} from './styles'

const Tab = createBottomTabNavigator();

export default function UserTabNavigator() {
    
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerTitleAlign: 'center' }}>

<Tab.Screen
       name="HUBICARE"
       component={Pesquisa}
       options={{
        tabBarIcon: ({ color, size, focused }) => (
          focused ? <Ionicons name="search" size={20} color={"#009681"} /> : <Ionicons name="search-outline" size={20} />
        ),
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

    <Tab.Screen 
      name="Servicos" 
      component={ServicosStack} 
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