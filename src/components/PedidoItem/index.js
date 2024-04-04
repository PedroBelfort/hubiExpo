import React from 'react';
import { Avatar, Text, IconButton, Chip } from 'react-native-paper';
import { Container, Labels } from './styles'; 
import { Ionicons } from '@expo/vector-icons';

export default function PedidoItem() {
  return (
    <Container>
      <Avatar.Image
        source={{
          uri: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}
        size={48.5}
        style={{ marginRight: 10, elevation: 5 }}
      />
      <Labels>
        <Text variant="titleMedium">Eunice Silva</Text>
        <Text variant="bodySmall">Porto, 3km</Text>
        <Text variant="labelSmall">10h00-11h00</Text>
        <Chip type="outlined">Pendente</Chip>
      </Labels>
      <IconButton
        icon={({ color, size }) => (
          <Ionicons name="chevron-forward" size={18} color={"black"} />
        )}
      />
    </Container>
  )
}