import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import { Image } from "react-native";

import StackRoutes from "../routes/stakRoutes";  
import PerfilStack from "../routes/perfilStack";  
import Recibos from "../pages/Recibos"; 
import Perfil from "../pages/Perfil";
import PedidoIcon from '../../assets/hubicare_icon_preto.png';
import ReciboStackRoutes from "../routes/reciboStackRoutes";

const Tab = createBottomTabNavigator();

export default function Routes() {
    
  return (
    <Tab.Navigator 
      screenOptions={{tabBarShowLabel: false , headerTitleAlign: 'center'}}
    >   
        <Tab.Screen 
                name="Pedidos" 
                component={StackRoutes} 
                options={{
                    tabBarIcon: ({color, size ,focused})=> {
                        if(focused){
                            return <Ionicons name="home" size={20} color={"#009681"} ></Ionicons>
                        }
                           return <Ionicons name="home-outline" size={20} ></Ionicons>
                },
                    headerShown:false,
                    title:'Pedidos',
                    headerTitleAlign: 'center'
                }}
            />
        <Tab.Screen name="Recibos" component={ReciboStackRoutes} options={{
            tabBarIcon: ({color, size ,focused})=> {
                    if(focused){
                        return <Ionicons name="cart" size={20} color={"#009681"} ></Ionicons>
                    }
                       return <Ionicons name="cart-outline" size={20}  ></Ionicons>
            },
            headerShown:false,
        }} />
        <Tab.Screen name="André Santos" component={PerfilStack} options={{
            headerShown:false,
            tabBarIcon: ({color, size ,focused})=> {
                    if(focused){
                        return <Ionicons name="person-circle" size={size} color={"#009681"} ></Ionicons>
                    }
                       return <Ionicons name="person-circle-outline" size={20} ></Ionicons>
            }
        }} />
   </Tab.Navigator>
  )
}