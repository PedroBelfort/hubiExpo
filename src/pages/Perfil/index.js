import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { Container, Labels,LabelName,LabelTelefone,LabelEmail,Header, OptionContainer } from './styles'; 
import { Ionicons } from '@expo/vector-icons';

export default function Perfil() {

  const navigation = useNavigation();

  const navigateToInformacaoDaConta = () => {
    navigation.navigate('InformacaoDaConta');
  };

  const navigateToDadosDeFaturacao = () => {
    navigation.navigate('DadosDeFaturacao');
  };

  const navigateToDadosPessoais = () => {
    navigation.navigate('DadosPessoais');
  };

  const navigateToObterAjuda = () => {
    navigation.navigate('ObterAjuda');
  };


  const navigateToInformacaoProfissional = () => {
    navigation.navigate('InformacaoProfissional');
  };

  const navigateToSeguranca = () => {
    navigation.navigate('Seguranca');
  };


  return (
    <Container>
          <Divider />
    <Header onPress={navigateToInformacaoDaConta} >
    <Avatar.Image
      source={{
        uri: "https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }}
      size={48.5}
      style={{ marginRight: 10, elevation: 5 }}
    />
   <Labels>
  <LabelName >André Santos</LabelName>
  <LabelTelefone >+351 966 421 743</LabelTelefone>
  <LabelEmail >hello@hubicare.com</LabelEmail>
  </Labels> 
    <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </Header>
  <OptionContainer>
  <LabelName>Informação da Conta</LabelName>
  <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </OptionContainer>

  <Divider />

  <OptionContainer onPress={navigateToDadosPessoais}>
  <LabelName>Informação Pessoal</LabelName>
  <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </OptionContainer>

  <Divider />

  <OptionContainer onPress={navigateToDadosDeFaturacao}>
  <LabelName>Dados de Faturação</LabelName>
  <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </OptionContainer>

  <Divider />

  <OptionContainer onPress={navigateToInformacaoProfissional}>
  <LabelName>Informação Profissional</LabelName>
  <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </OptionContainer>

  <Divider />

  <OptionContainer>
  <LabelName>Documentos</LabelName>
  <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </OptionContainer>

  <Divider />

  <OptionContainer onPress={navigateToSeguranca}>
  <LabelName>Segurança</LabelName>
  <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </OptionContainer>

  <Divider />

  <OptionContainer onPress={navigateToObterAjuda} >
  <LabelName>Obter ajuda</LabelName>
  <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
  </OptionContainer>
  </Container>
  )
}