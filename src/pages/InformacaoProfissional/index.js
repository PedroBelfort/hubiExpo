import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer } from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

export default function InformacaoProfissional() {

    const navigation = useNavigation();

  return (
    <Container>
         <OptionContainer>
          <Labels>
          <LabelTitle>Local de Prestação do Serviço</LabelTitle>
          <LabelValue>Matosinhos</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
         </OptionContainer>

         <Divider />

         <OptionContainer>
         <Labels>
          <LabelTitle>Regime de Serviço</LabelTitle>
          <LabelValue>Tempo Parcial</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
      
      </OptionContainer>

      <Divider />

      <ViewContainer>
          <Labels>
          <LabelTitle>Profissão</LabelTitle>
          <LabelValue>Enfermeiro</LabelValue>
          </Labels>
         
         </ViewContainer>

         <Divider />

         <ViewContainer>
          <Labels>
          <LabelTitle>Formação</LabelTitle>
          <LabelValue>Licenciatura Enfermagem Escola Superior de Ciências de Saúde 2009-2012</LabelValue>
          </Labels>
         
         </ViewContainer>
   
    </Container>
  )
}