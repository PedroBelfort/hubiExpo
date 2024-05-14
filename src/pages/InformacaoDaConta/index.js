import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer } from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

export default function InformacaoDaConta() {

    const navigation = useNavigation();

  return (
    <Container>

         <ViewContainer>
          <Labels>
          <LabelTitle>Nome</LabelTitle>
          <LabelValue>André Felipe Dias Santos</LabelValue>
          </Labels>
         </ViewContainer>

         <Divider />

         <ViewContainer>
         <Labels>
          <LabelTitle>Documento de Identificação</LabelTitle>
          <LabelValue>Cartão de Cidadão (PT)******** 3AX4</LabelValue>
          </Labels>
        </ViewContainer>

        <Divider />

        <OptionContainer>
        <Labels>
          <LabelTitle>Telemóvel</LabelTitle>
          <LabelValue>+351 966 421 743</LabelValue>
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
          <LabelTitle>Email</LabelTitle>
          <LabelValue>hello@hubicare.com</LabelValue>
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