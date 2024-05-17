import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer } from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

export default function DadosPessoais() {

    const navigation = useNavigation();

  return (
    <Container>
         <OptionContainer>
          <Labels>
          <LabelTitle>Data de Nascimento</LabelTitle>
          <LabelValue>24 de Abril de 1991</LabelValue>
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
          <LabelTitle>Gênero</LabelTitle>
          <LabelValue>Masculino</LabelValue>
          </Labels>
          <IconButton
      icon={({ color, size }) => (
        <Ionicons name="chevron-forward-outline" size={18} color={"black"} />
      )}
    />
      
      </OptionContainer>
    </Container>
  )
}