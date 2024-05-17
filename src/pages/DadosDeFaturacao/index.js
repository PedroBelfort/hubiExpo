import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer } from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

export default function DadosDeFaturacao() {

    const navigation = useNavigation();

  return (
    <Container>

         <ViewContainer>
          <Labels>
          <LabelTitle>Número de Identificação Fiscal</LabelTitle>
          <LabelValue>233 554 235</LabelValue>
          </Labels>
         </ViewContainer>

         <Divider />

         <OptionContainer>
         <Labels>
          <LabelTitle>Morada de Faturação</LabelTitle>
          <LabelValue>Avenida do Conde 65, 4455-090 Porto</LabelValue>
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
          <LabelTitle>IBAN</LabelTitle>
          <LabelValue>**** **** **** **** **** *345 3</LabelValue>
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
          <LabelTitle>Situação Contributiva</LabelTitle>
          <LabelValue>Trabalhador Independente</LabelValue>
          </Labels>

       </ViewContainer>

       

    </Container>
  )
}