import React from 'react';
import { FlatList, ScrollView } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import { Text, Chip, Avatar, Divider,Button } from 'react-native-paper';
import SmallButtonButton from '../../components/SmallButton';
import { useNavigation, useRoute } from "@react-navigation/native"; 
import Status from "../../components/Status";
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
  ContainerButtons,
  LabelTitle,
  LabelName,
  LabelLocalization,
  LabelSchedule,
  HorizontalSpace,
  ContainerAlerta } from './styles'; 
import SmallButton from '../../components/SmallButton';


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
        <LabelTitle>Detalhes do Serviço</LabelTitle>
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
         

          <LabelName >Eunice Silva</LabelName>
        <LabelLocalization >Porto, 3km</LabelLocalization>
        <LabelSchedule >10h00-11h00</LabelSchedule>
        <Status status={"Pendente"}></Status>

        </Labels>
      </Detalhes>
      <AlertaStatus>
        <Ionicons name="warning-outline" color={"#CB7C06"} size={25} ></Ionicons>
        <ContainerAlerta>
          <LabelAlerta>Pendente: O pedido expira em 4:49 horas</LabelAlerta>
        </ContainerAlerta>
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
      <SmallButtonButton  label="Recusar" hasBackground={false} onPress={() => navigation.goBack()} /> 
      <SmallButtonButton  label="Aceitar" hasBackground={true} onPress={() =>  navigation.goBack()} />
      </ContainerButtons>


    </Container>
  )
}