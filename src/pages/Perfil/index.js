import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"; 
import {  Chip, Avatar, Divider,Button } from 'react-native-paper';

export default function Perfil() {

  const navigation = useNavigation();

  function navigatePedidosPage(){
    console.log("Navigating to Pedidos page");
    navigation.navigate("Perfil");
  }

  return (
    <View>
       <Button icon="camera" mode="contained" onPress={() => navigation.goBack()}/>
    </View>
  )
}