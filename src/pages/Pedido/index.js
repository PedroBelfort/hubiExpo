import React from 'react';
import { FlatList } from 'react-native'; // Adicionei a importação do FlatList
import { Ionicons } from '@expo/vector-icons';
import { Text, Chip, Avatar, Divider } from 'react-native-paper';
import {
  Container,
  PedidoHeader,
  Detalhes,
  Labels,
  LabelAlerta,
  AlertaStatus,
  ServicosSolicitados,
  Title,
  LabelRegular
} from './styles';

export default function Pedido() {
  return (
    <Container>
      <PedidoHeader>
        <Text variant="titleMedium">Detalhes do Serviço</Text>
      </PedidoHeader>
      <Detalhes>
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
      </Detalhes>
      <AlertaStatus>
        <Ionicons name="warning-outline" size={23} color={"#CB7C06"} ></Ionicons>
        <LabelAlerta>
          <Text variant="bodyMedium">Pendente: O pedido expira em 4:49 horas</Text>
        </LabelAlerta>
      </AlertaStatus>
      <Divider />
      <ServicosSolicitados>
        <Title>
          Serviços Solicitados
        </Title>
        <FlatList
          data={[
            { key: 'Higiene' },
            { key: 'Companhia' },
            { key: 'Preparacao Refeição' },
            { key: 'Higiene' },
            { key: 'Companhia' },
            { key: 'Preparacao Refeição' },
          ]}
          renderItem={({ item }) => <LabelRegular>{item.key}</LabelRegular>}
        />

      </ServicosSolicitados>
      <Divider />
    </Container>
  )
}