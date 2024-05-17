import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer } from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import React from 'react'

export default function ObterAjuda() {

    const navigation = useNavigation();

  return (
    <Container>
         <OptionContainer>
          <Labels>
          <LabelTitle>Ligar</LabelTitle>
          <LabelValue>+351 966 421 743</LabelValue>
          </Labels>
         </OptionContainer>

         <Divider />

         <OptionContainer>
         <Labels>
          <LabelTitle>Email</LabelTitle>
          <LabelValue>hello@hubicare.com</LabelValue>
          </Labels>
      </OptionContainer>
    </Container>
  )
}