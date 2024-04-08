import React from 'react';
import { FlatList, ScrollView } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import { Text, Chip, Avatar, Divider,Button } from 'react-native-paper';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation, useRoute } from "@react-navigation/native"; 
import {
  Container,
  PedidoHeader,
  Detalhes,
  Labels,
  LabelAlerta,
  AlertaStatus,
  ServicosSolicitados,
  Title,
  LabelRegular,
  ContainerDadosPessoais,
  ContainerButtons
} from './styles';

export default function Pedido() {

  const navigation = useNavigation();
  const route = useRoute();

  const servicos =[
    { key: 'Higiene' },
    { key: 'Companhia' },
    { key: 'Preparacao Refeição' },
  ]

  const dadosPessoais = [
    { key: 'Genero', value: 'Feminino' },
    { key: 'Idade', value: 67 },
    { key: 'Nome', value: 'Eunice Silva' },
    { key: 'Nacionalidade', value: 'Portugal' }
  ];

  return (
    <Container>
        <PedidoHeader>
        <Text variant="titleMedium">Detalhes do Serviço </Text>
      </PedidoHeader>
      <ScrollView showsVerticalScrollIndicator={true}>

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
        <Ionicons name="warning-outline" color={"#CB7C06"} ></Ionicons>
        <LabelAlerta>
          <Text variant="bodyMedium">Pendente: O pedido expira em 4:49 horas</Text>
        </LabelAlerta>
      </AlertaStatus>
      <Divider />
      <ServicosSolicitados>
        <Title>
          Serviços Solicitados
        </Title>
       
        {servicos.map(item => (
        <LabelRegular key={item.key}>
          {item.key} 
        </LabelRegular>
      ))}
     
      </ServicosSolicitados>
      <Divider />
      <ContainerDadosPessoais>
      <Title>Dados Pessoais</Title>
  
      {dadosPessoais.map(item => (
        <LabelRegular key={item.key}>
           {item.key}:  {item.value}
        </LabelRegular>
      ))}
  
      </ContainerDadosPessoais>
      </ScrollView>
      <ContainerButtons>
      <PrimaryButton  label="Aceitar" hasBackground={true} onPress={() =>  navigation.goBack()} />
      <PrimaryButton  label="Recusar" hasBackground={false} onPress={() => navigation.goBack()} /> 
      </ContainerButtons>
    </Container>
  )
}