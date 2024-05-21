import { Container,OptionContainer,LabelTitle , LabelValue,Labels, ViewContainer, BackgroundContainer} from './styles'; 
import {  Chip, Avatar, Divider,Button,IconButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function InformacaoDaConta() {

    const navigation = useNavigation();

    const navigateToTelemovel = () => {
      navigation.navigate('Telemovel');
    };

    
    const navigateToAtualizacaoDeEmail = () => {
      navigation.navigate('AtualizacaoDeEmail');
    };
  
  

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
   <BackgroundContainer>
        <OptionContainer activeOpacity={0.8} onPress={navigateToTelemovel}>
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

        <OptionContainer activeOpacity={0.8} onPress={navigateToAtualizacaoDeEmail}>
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

       </BackgroundContainer>

    </Container>
  )
}