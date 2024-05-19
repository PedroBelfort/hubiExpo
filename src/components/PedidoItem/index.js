import React, {useState, useEffect} from "react";
import { Avatar, Text, IconButton, Chip } from 'react-native-paper';
import { Container, Labels,LabelName,LabelLocalization,LabelSchedule,HorizontalSpace } from './styles'; 
import { Ionicons } from '@expo/vector-icons';
import { Modal } from "react-native";
import Status from "../Status";


export default function PedidoItem({data, navigatePage = () => {}, openModal = () => {}, onPress = () => {} }) {
  
    if(data.status === "Agendado" ){
      return (
        <Container activeOpacity={0.7} onPress={()=> openModal()}>
          <Avatar.Image
            source={{
              uri: "https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }}
            size={48.5}
            style={{ marginRight: 10, elevation: 5 }}
          />
         <Labels>
        <LabelName >{data.nome}</LabelName>
        <LabelLocalization >{data.cidade}, {data.distancia}</LabelLocalization>
        <LabelSchedule >{data.dataAtendimento} - {data.horario}</LabelSchedule>
        <Status status={data.status}></Status>
      </Labels> 
          <IconButton
            icon={({ color, size }) => (
              <Ionicons name="ellipsis-vertical" size={18} color={"black"} />
            )}
          />
        </Container>
      )
    }
  
  return (
    <Container activeOpacity={0.7} onPress={()=> navigatePage(data)}>
      <Avatar.Image
        source={{
          uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        size={48.5}
        style={{ marginRight: 10, elevation: 5 }}
      />
      <Labels>
      <LabelName >{data.nome}</LabelName>
        <LabelLocalization >{data.cidade}, {data.distancia}</LabelLocalization>
        <LabelSchedule >{data.dataAtendimento} - {data.horario}</LabelSchedule>
        <Status status={data.status}></Status>
      </Labels>
      <IconButton
        icon={({ color, size }) => (
          <Ionicons name="chevron-forward" size={18} color={"black"} />
        )}
      />
    </Container>
  )
}