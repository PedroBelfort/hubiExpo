import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer } from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

export default function Seguranca() {

    const navigation = useNavigation();

  return (
    <Container>
         <OptionContainer>
          <Labels>
          <LabelTitle>Código PIN</LabelTitle>
          <LabelValue>*****</LabelValue>
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
          <LabelTitle>Eliminar Conta</LabelTitle>
          <LabelValue>Esta ação é irreversível e só pode ser efetuada</LabelValue>
          <LabelValue>após o pagamento de todos os serviços.</LabelValue>
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