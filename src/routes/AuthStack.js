import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../pages/SplashScreen";
import PreRegSplashScreen from "../pages/PreRegSplashScreen";
import { Text  } from 'react-native-paper';
import SignUp from "../pages/SignUp";
import Routes from "../routes/routes";
import Login from "../pages/Login";


const Stack = createNativeStackNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerTitleAlign: 'center', 
        headerShown: true 
      }}
     
    >
    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen
    name="PreRegSplashScreen"
    component={PreRegSplashScreen}
    options={{
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>PERFIL</Text>
      ),
    }}
  />

<Stack.Screen
    name="SignUp"
    component={SignUp}
    options={{
      headerShown:false,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>SignUp</Text>
      ),
    }}
  />

<Stack.Screen
    name="Login"
    component={Login}
    options={{
      headerShown:false,
      headerTitle: () => (
        <Text  variant="labelLarge" style={{ color: '#000000', fontSize: 20, fontWeight:600 }}>Login</Text>
      ),
    }}
  />
  <Stack.Screen
    name="Pedidos"
    component={Routes}
    options={{
      headerShown:false,
                    title:'Pedidos',
                    headerTitleAlign: 'center'
    }}
  />
    </Stack.Navigator>
  );
}


export default AuthStack;
