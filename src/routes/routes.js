import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import { Image } from "react-native";

import StackRoutes from "../routes/stakRoutes";
import Recibos from "../pages/Recibos"; 
import Perfil from "../pages/Perfil";
import PedidoIcon from '../../assets/hubicare_icon.png';
import Pedidos from "../pages/Pedidos";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator 
      screenOptions={{tabBarShowLabel: false}}
    >
        <Tab.Screen 
                name="Pedidos" 
                component={StackRoutes} 
                options={{
                    tabBarIcon: ({ color, size,focused }) => (
                        <Image 
                            source={PedidoIcon}
                            style={{ width: size, height: size, tintColor: "#009681" }}
                        />
                    ),
                    headerShown:false,
                    title:'Pedidos',
                    headerTitleAlign: 'center'
                }}
            />
        <Tab.Screen name="Recibos" component={Recibos} options={{
            tabBarIcon: ({color, size ,focused})=> {
                    if(focused){
                        return <Ionicons name="cart" size={size} color={"#009681"} ></Ionicons>
                    }
                       return <Ionicons name="cart-outline" size={size} color={"#009681"} ></Ionicons>
            }
        }} />
        <Tab.Screen name="Perfil" component={Perfil} options={{
            tabBarIcon: ({color, size ,focused})=> {
                    if(focused){
                        return <Ionicons name="person-circle" size={size} color={"#009681"} ></Ionicons>
                    }
                       return <Ionicons name="person-circle-outline" size={size} color={"#009681"} ></Ionicons>
            }
        }} />
   </Tab.Navigator>
  )
}