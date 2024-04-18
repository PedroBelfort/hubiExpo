import React from 'react';
import { Avatar, Text, IconButton } from 'react-native-paper';
import { Container, Labels } from './styles'; // Import your styled-components
import { Ionicons } from '@expo/vector-icons';
import Status from "../Status";

const TimeLineItem = ({openModalAtivo}) => {
  return (
    <Container  onPress={()=> openModalAtivo()}>
      <Avatar.Image
        source={{
          uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        size={48.5}
        style={{ marginRight: 10, elevation: 5 }}
      />
      <Labels>
        <Text style={{ fontSize: 17, color: '#fff' }}>Pereira G.</Text>
        <Text style={{ color: '#fff', fontSize: 11, fontWeight: '500', marginTop: 3 }}>10h-11h00</Text>
        <Status status={"Ativo"}></Status>
      </Labels>
      <IconButton
        icon={({ color, size }) => (
          <Ionicons name="ellipsis-vertical" size={28} color={"#FFF"} />
        )}
      />
    </Container>
  );
}

export default TimeLineItem;
